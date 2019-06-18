
  package com.example.mco.entities;
  
  import java.io.Serializable; import java.util.Collection;
  
  import javax.persistence.Entity; import javax.persistence.FetchType; import
  javax.persistence.GeneratedValue; import javax.persistence.Id;
  
  import javax.persistence.OneToMany; import
  javax.validation.constraints.NotEmpty;
  
@Entity
public class Application implements Serializable {

	@Id
	@GeneratedValue
	private Long appId;

	@NotEmpty (message = "Ce champ est OBLIGATOIRE")
	private String appName;

	@OneToMany(mappedBy = "application", fetch = FetchType.LAZY)
	private Collection<FileInfo> fileInfos;

	public Application() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Application(@NotEmpty(message = "Ce champ est OBLIGATOIRE") String appName, Collection<FileInfo> fileInfos) {
		super();
		this.appName = appName;
		this.fileInfos = fileInfos;
	}



	public Long getAppId() {
		return appId;
	}

	public void setAppId(Long appId) {
		this.appId = appId;
	}

	public String getAppName() {
		return appName;
	}

	public void setAppName(String appName) {
		this.appName = appName;
	}

	public Collection<FileInfo> getFileInfos() {
		return fileInfos;
	}

	public void setFileInfos(Collection<FileInfo> fileInfos) {
		this.fileInfos = fileInfos;
	}

	
}
