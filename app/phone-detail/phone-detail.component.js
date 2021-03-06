'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone','CartList', '$rootScope','checkCookies',
      function PhoneDetailController($routeParams, Phone, CartList, $rootScope, checkCookies) {
        checkCookies.cookies();
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        this.addInCart = function (index) {
          CartList.incrementCount();
          $rootScope.$emit('renewCount','');
          CartList.addInObj(false, false, self.phone);
        }
      }
    ]
  });
