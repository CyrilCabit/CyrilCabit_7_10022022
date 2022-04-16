

function isOwner(pseudo, allowAdmin = false) {
  const userPseudo = localStorage.getItem("pseudo");
  if(userPseudo == 'admin' && allowAdmin) {
      return true
  }
  else if(userPseudo == pseudo){
      return true
  }
  else { return false}
}

export {isOwner}