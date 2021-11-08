const LinksSocialMedia = {
    github: 'hxc48',
    youtube: 'aurivam',
    facebook: 'hxc48',
    instagran: 'aurivan100',
    twitter: 'hxc48'
  }

  function changeSocialMediaLinks() {
    userNane.textContent = 'Aurivan'

    for (let li of socialLiks.children) {
     const social = li.getAttribute('class')
       
     li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    }
  }
  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`

      fetch(url).then(Response => Response.json())
      then(data => {
        userName.textContent = data.name
        userBio.textContent = data.Bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
      })
  }

  getGitHubProfileInfos()