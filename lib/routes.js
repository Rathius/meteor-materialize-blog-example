Router.configure({
  layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound'
});
Router.map(function() {
    this.route('home', {
        path: '/',
    });

    this.route('private');
});

if (Meteor.isClient) {
  Router.plugin('ensureSignedIn', {
    only: ['private']
  });
};


//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
