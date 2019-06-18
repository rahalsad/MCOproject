package com.example.mco.web;
/*
 * package com.example.demo.web;
 * 
 * import java.io.FileInputStream; import java.io.IOException;
 * 
 * import javax.servlet.ServletContext; import javax.servlet.ServletException;
 * import javax.servlet.http.HttpServletRequest; import
 * javax.servlet.http.HttpServletResponse; import javax.servlet.http.Part;
 * import javax.validation.Valid;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.data.domain.Page; import
 * org.springframework.data.domain.PageRequest; import
 * org.springframework.ui.Model; import
 * org.springframework.validation.BindingResult; import
 * org.springframework.web.bind.annotation.PathVariable; import
 * org.springframework.web.bind.annotation.RequestMapping; import
 * org.springframework.web.bind.annotation.RequestMethod; import
 * org.springframework.web.bind.annotation.RequestParam; import
 * org.springframework.web.bind.annotation.ResponseBody;
 * 
 * import com.example.demo.dao.DocumentationRepository; import
 * com.example.demo.entities.Direction; import
 * com.example.demo.entities.Documentation;
 * 
 * import java.io.BufferedOutputStream; import java.io.File;
 * 
 * import java.nio.file.Files; import java.nio.file.Path; import
 * java.nio.file.Paths;
 * 
 * import org.springframework.data.domain.PageRequest; import
 * org.springframework.stereotype.Controller; import
 * org.springframework.ui.Model; import
 * org.springframework.web.bind.annotation.CrossOrigin; import
 * org.springframework.web.bind.annotation.GetMapping; import
 * org.springframework.web.bind.annotation.PathVariable; import
 * 
 * org.springframework.web.bind.annotation.RequestMapping; import
 * org.springframework.web.bind.annotation.RequestParam; import
 * org.springframework.web.bind.annotation.ResponseBody; import
 * org.springframework.web.multipart.MultipartFile;
 * 
 * import com.example.demo.dao.DocumentationRepository; import
 * com.example.demo.entities.Documentation;
 * 
 * @CrossOrigin("*")
 * 
 * @Controller public class DocumentationController {
 * 
 * @Autowired ServletContext context;
 * 
 * @Autowired private DocumentationRepository documentationRepository;
 * 
 * private static final String SAVE_DIR = "uploadFiles";
 * 
 * @RequestMapping(value = "/doc") public String doc(Model
 * model, @RequestParam(name = "page", defaultValue = "0") int page,
 * 
 * @RequestParam(name = "size", defaultValue = "7") int size,
 * 
 * @RequestParam(name = "mc2", defaultValue = "") String mc2) {
 * Page<Documentation> pagedocumentations = documentationRepository.chercher("%"
 * + mc2 + "%", new PageRequest(page, size));
 * 
 * System.out.println(pagedocumentations.getSize());
 * 
 * model.addAttribute("listdocumentations", pagedocumentations.getContent());
 * int[] pages = new int[pagedocumentations.getTotalPages()];
 * model.addAttribute("pages", pages); model.addAttribute("size", size);
 * model.addAttribute("pageCourante", page); model.addAttribute("mc2", mc2);
 * 
 * return "documentations"; }
 * 
 * @RequestMapping("/documentation/{docName}")
 * 
 * @ResponseBody public void show(@PathVariable("docName") String docName,
 * HttpServletResponse response) {
 * 
 * if (docName.indexOf(".doc") > -1)
 * response.setContentType("application/msword"); if (docName.indexOf(".docx") >
 * -1) response.setContentType("application/msword"); if
 * (docName.indexOf(".xls") > -1)
 * response.setContentType("application/vnd.ms-excel"); if
 * (docName.indexOf(".csv") > -1)
 * response.setContentType("application/vnd.ms-excel"); if
 * (docName.indexOf(".ppt") > -1) response.setContentType("application/ppt"); if
 * (docName.indexOf(".pdf") > -1) response.setContentType("application/pdf"); if
 * (docName.indexOf(".zip") > -1) response.setContentType("application/zip");
 * response.setHeader("Content-Disposition", "attachment; docName=" + docName);
 * response.setHeader("Content-Transfer-Encoding", "binary"); try {
 * BufferedOutputStream bos = new
 * BufferedOutputStream(response.getOutputStream()); FileInputStream fis = new
 * FileInputStream(docName); int len; byte[] buf = new byte[1024]; while ((len =
 * fis.read(buf)) > 0) { bos.write(buf, 0, len); } bos.close();
 * response.flushBuffer(); } catch (IOException e) { e.printStackTrace();
 * 
 * } }
 * 
 * @RequestMapping(value = "/saveFile", method = RequestMethod.POST) public
 * String saveFile(Model model, @Valid Documentation documentation,
 * BindingResult bindingResult) { System.out.println(
 * "---------------------------------------------------------------------------"
 * ); if (bindingResult.hasErrors()) return "documentations";
 * 
 * System.out.println(documentation.getDocName() + documentation.getType() +
 * documentation.getData()); documentationRepository.save(documentation); return
 * "documentations"; // LE NOM DE LA VUE.HTML
 * 
 * }
 * 
 * @RequestMapping(value = "/saveFile", method = RequestMethod.POST) public
 * String saveFile(Model model, HttpServletRequest request) {
 * 
 * 
 * String appPath = request.getServletContext().getRealPath(""); // constructs
 * //path of the directory to save uploaded file System.out.println(appPath);
 * 
 * String savePath = appPath + File.separator + SAVE_DIR;
 * 
 * savePath= "127.0.0.1/rp/upload";
 * 
 * 
 * System.out.println(savePath);
 * 
 * File fileSaveDir = new File(savePath); if (!fileSaveDir.exists()) {
 * fileSaveDir.mkdir(); }
 * 
 * try { for (Part part : request.getParts()) { String fileName =
 * extractFileName(part); // refines the fileName in case it is an absolute path
 * fileName = new File(savePath+fileName).getName(); part.write(savePath +
 * File.separator + fileName);
 * 
 * System.out.println(savePath + File.separator + fileName);
 * 
 * Documentation doc= new Documentation(); doc.setDocName(fileName);
 * doc.setPathD(savePath + File.separator);
 * 
 * documentationRepository.save(doc); } System.out.println("Sucess");
 * 
 * } catch (IOException e) { // TODO Auto-generated catch block
 * e.printStackTrace(); } catch (ServletException e) { // TODO Auto-generated
 * catch block e.printStackTrace(); }
 * 
 * 
 * return "documentations"; // LE NOM DE LA VUE.HTML
 * 
 * }
 * 
 * private String extractFileName(Part part) { String contentDisp =
 * part.getHeader("content-disposition"); String[] items =
 * contentDisp.split(";"); for (String s : items) { if
 * (s.trim().startsWith("filename")) { return s.substring(s.indexOf("=") + 2,
 * s.length() - 1); } } return ""; }
 * 
 * { try { // save file to PostgreSQL Documentation filemodel = new
 * Documentation(documentation.getOriginalFilename(),
 * documentation.getContentType(), documentation.getBytes());
 * documentationRepository.save(documentation); return
 * "File uploaded successfully! -> filename = " +
 * documentation.getOriginalFilename(); } catch (Exception e) { return
 * "FAIL! Maybe You had uploaded the file before or the file's size > 500KB"; }
 * }
 * 
 * }
 */