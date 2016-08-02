import Ember from 'ember';

export default Ember.Controller.extend({


  isMessageLong: Ember.computed.gte('textMessage.length', 5),
  success: "has-success",
  error: "has-error",

  isEmailValid: Ember.computed.match('emailAddress', /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/),
  isFormValid: Ember.computed.and('emailAddress', 'isMessageLong'),

  isDisabled: Ember.computed.not('isFormValid'),

  feedback: Ember.computed('isDisabled', function() {
    return this.get('isDisabled') ? this.get('error'): this.get('success');
  }),

  actions: {
    sendMessage(){
      alert(`Your email is: ${this.get('emailAddress')} and your message: ${this.get('textMessage')}`);
      this.set('responseMessage', `We got your message and we'll get in touch soon`);
      this.set('emailAddress', '');
      this.set('textMessage', '');
    }
  }
});
