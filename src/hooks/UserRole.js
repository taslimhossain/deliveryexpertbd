const UserRole = {
    superAdmin() {
      return ['super_admin'];
    },
    admin() {
      return ['super_admin','admin','manager'];
    },
    manager() {
      return ['super_admin','admin','manager','merchant','rider'];
    },
    merchant() {
      return ['super_admin','admin','manager','merchant'];
    },
    rider() {
      return ['super_admin','admin','manager','rider'];
    },
    noRole() {
      return [];
    }
}
export default UserRole