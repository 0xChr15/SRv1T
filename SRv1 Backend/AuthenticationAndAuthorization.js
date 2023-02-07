function checkAccess(user) {
    let allowedRoles = ['admin', 'compliance'];
    if (allowedRoles.indexOf(user.role) !== -1) {
      return true;
    } else {
      return false;
    }
  }