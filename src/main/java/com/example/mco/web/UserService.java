package com.example.mco.web;
/*
 * package com.example.demo.web;
 * 
 * import java.text.SimpleDateFormat; import java.util.ArrayList; import
 * java.util.Date; import java.util.HashMap; import java.util.List; import
 * java.util.Map;
 * 
 * import javax.servlet.http.HttpServletRequest; import
 * javax.servlet.http.HttpSession; import javax.validation.Valid;
 * 
 * import com.example.demo.dao.DepartementRepository; import
 * com.example.demo.dao.UserRepository; import
 * com.example.demo.entities.Application; import
 * com.example.demo.entities.Departement; import
 * com.example.demo.entities.Initiateur; import com.example.demo.entities.Users;
 * import com.example.demo.validator.UserValidator; import
 * org.springframework.web.servlet.ModelAndView;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.data.domain.Page; import
 * org.springframework.data.domain.PageRequest; import
 * org.springframework.data.domain.Pageable; import
 * org.springframework.security.access.annotation.Secured; import
 * org.springframework.security.core.GrantedAuthority; import
 * org.springframework.security.core.context.SecurityContext; import
 * org.springframework.stereotype.Controller; import
 * org.springframework.ui.Model; import
 * org.springframework.validation.BindingResult; import
 * org.springframework.web.bind.annotation.GetMapping; import
 * org.springframework.web.bind.annotation.ModelAttribute;
 * 
 * import org.springframework.web.bind.annotation.RequestMapping; import
 * org.springframework.web.bind.annotation.RequestMethod; import
 * org.springframework.web.bind.annotation.RequestParam; import
 * org.springframework.web.context.request.WebRequest;
 * 
 * @Controller public class UserService {
 * 
 * @Autowired private UserRepository userRepository;
 * 
 * @Autowired private DepartementRepository departementRepository;
 * 
 * @Autowired private UserRepository userRepository ; //@Secured(value=
 * {"ROLE_ADMIN"})
 * 
 * @RequestMapping(value = "/saveUtilisateurs",method = RequestMethod.GET)
 * public Users saveUtilisateur (Users u) { return userRepository.save(u); }
 * 
 * //pour returner une page des utilisateurs
 * 
 * @Secured(value= {"ROLE_ADMIN","ROLE_UTILISATEUR"})
 * 
 * @RequestMapping(value = "/inititeurs") public Page<Users>
 * listUtilisateurs(int page,int size){ return UserRepository.find(new
 * PageRequest(page, size));
 * 
 * }
 * 
 * //permet returner l'utilisateur et ses roles qui est authentifier
 * 
 * 
 * @RequestMapping(value="/profil") public String profil(Model model,
 * 
 * @RequestParam(name="page", defaultValue="0")int pag,
 * 
 * @RequestParam(name="size", defaultValue="7")int size,
 * 
 * @RequestParam(name="mc1", defaultValue="")String mc1) { Page<Users>
 * pU=userRepository.afficher("%"+mc1+"%",new PageRequest(pag,size));
 * 
 * model.addAttribute("listInscription", pU.getContent()); int [] pages=new
 * int[pU.getTotalPages()]; model.addAttribute("pages",pages);
 * model.addAttribute("size",size); model.addAttribute("pageCourante",pag);
 * model.addAttribute("mc1",mc1);
 * 
 * 
 * return "ListInscrp"; }
 * 
 * @RequestMapping(value="/getLogedUser") public Map<String, Object>
 * getLogedser(HttpServletRequest httpServletRequest){ HttpSession httpSession =
 * httpServletRequest.getSession(); SecurityContext securityContext =
 * (SecurityContext) httpSession.getAttribute("SPRING_SECURITY_CONTEXT"); String
 * username = securityContext.getAuthentication().getName(); String password =
 * (String) securityContext.getAuthentication().getCredentials(); List<String>
 * role = new ArrayList<>(); for(GrantedAuthority
 * ga:securityContext.getAuthentication().getAuthorities()) {
 * role.add(ga.getAuthority()); } Map<String, Object> params = new HashMap<>();
 * params.put("username", username); params.put("role", role);
 * params.put("password", password);
 * 
 * return params; }
 * 
 * 
 * //@Secured(value= {"ROLE_ADMIN"})
 * 
 * @RequestMapping(value="/") public String home(Model model){
 * 
 * return "redirect:/init"; }
 * 
 * @RequestMapping(value="/fiche") public String fiche(Model model){
 * 
 * return "redirect:/fiche"; }
 * 
 * 
 * @RequestMapping(value="/registration",method=RequestMethod.GET) public String
 * registration(Model model) { List<Departement> departements =
 * departementRepository.findAll();
 * model.addAttribute("departements",departements);
 * 
 * model.addAttribute("selectDep","Selectionner le departement");
 * model.addAttribute("users",new Users()); return "registration"; //LE NOM DE
 * LA VUE.HTML
 * 
 * }
 * 
 * 
 * @RequestMapping(value="/saveUser",method=RequestMethod.POST) public String
 * saveUser(Model model ,@Valid Users users, BindingResult bindingResult) { if
 * (bindingResult.hasErrors()) return "registration";
 * userRepository.save(users); return "ConfirmUser"; //LE NOM DE LA VUE.HTML
 * 
 * }
 * 
 * @RequestMapping(value = "/registration", method = RequestMethod.GET) public
 * ModelAndView register() { ModelAndView modelAndView = new ModelAndView(); //
 * User user = new User(); // modelAndView.addObject("user", user);
 * modelAndView.setViewName("registration"); // resources/template/register.html
 * return modelAndView; }
 * 
 * 
 * 
 * 
 * }
 * 
 */