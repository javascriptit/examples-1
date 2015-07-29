exports.install = function() {
	F.route('/users/', view_users);
	F.route('/users/admin/', view_users_admin);
};

function view_users() {
	var self = this;
    self.meta('Users');

	// this view is loaded by the controller name: /views/users/index.html
	self.view('index');
}

function view_users_admin() {
	var self = this;
    self.meta('Admin');
	self.view('~admin');
}