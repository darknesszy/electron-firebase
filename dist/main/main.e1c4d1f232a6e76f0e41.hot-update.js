exports.id = "main";
exports.modules = {

/***/ "./src/main/MainWindow/index.ts":
/*!**************************************!*\
  !*** ./src/main/MainWindow/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainWindow; });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass MainWindow extends electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"] {\n    constructor(options) {\n        super(options);\n        this.loginAuth = async (event, arg) => {\n            console.log('login request received', arg);\n            var res = await firebase__WEBPACK_IMPORTED_MODULE_1___default.a.auth().signInWithEmailAndPassword(arg.email, arg.pass);\n            console.log('login request completed', res && ' successfully');\n            event.returnValue = res.user ? `Welcome ${res.user.displayName}` : `Login Unsuccessful`;\n        };\n        this.fetchCollection = (user) => {\n            console.log('fetching collection', user);\n            if (user) {\n                this.database.collection('todos').get()\n                    .then(querySnapshot => {\n                    querySnapshot.forEach(el => this.todo = el.data());\n                    console.log('collection fetched');\n                });\n            }\n            else {\n                this.todo = undefined;\n                console.log('collection cleared');\n            }\n        };\n        var firebaseConfig = {\n            apiKey: \"AIzaSyBVlpmxj7PGBO5THWvBagfq612KpismVvo\",\n            authDomain: \"hello-firebase-1d6fc.firebaseapp.com\",\n            databaseURL: \"https://hello-firebase-1d6fc.firebaseio.com\",\n            projectId: \"hello-firebase-1d6fc\",\n            storageBucket: \"hello-firebase-1d6fc.appspot.com\",\n            messagingSenderId: \"760507585405\",\n            appId: \"1:760507585405:web:521de7303a07a749\"\n        };\n        // Initialize Firebase\n        firebase__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(firebaseConfig);\n        this.database = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();\n        firebase__WEBPACK_IMPORTED_MODULE_1___default.a.auth().onAuthStateChanged(user => this.fetchCollection);\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"ipcMain\"].on('loginAuth', this.loginAuth);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9NYWluV2luZG93L2luZGV4LnRzP2FhMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtGO0FBQ3BDO0FBRS9CLE1BQU0sVUFBVyxTQUFRLHNEQUFhO0lBSWpELFlBQVksT0FBeUM7UUFDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQW1CbEIsY0FBUyxHQUFHLEtBQUssRUFBRSxLQUFVLEVBQUUsR0FBUSxFQUFFLEVBQUU7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUM7WUFDMUMsSUFBSSxHQUFHLEdBQUcsTUFBTSwrQ0FBUSxDQUFDLElBQUksRUFBRSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztZQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsSUFBSSxlQUFlLENBQUM7WUFDOUQsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUMzRixDQUFDO1FBRUQsb0JBQWUsR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDO1lBQ3hDLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRTtxQkFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUNsQixhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDckMsQ0FBQyxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDO2FBQ3BDO1FBQ0wsQ0FBQztRQXBDRyxJQUFJLGNBQWMsR0FBRztZQUNqQixNQUFNLEVBQUUseUNBQXlDO1lBQ2pELFVBQVUsRUFBRSxzQ0FBc0M7WUFDbEQsV0FBVyxFQUFFLDZDQUE2QztZQUMxRCxTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDLGFBQWEsRUFBRSxrQ0FBa0M7WUFDakQsaUJBQWlCLEVBQUUsY0FBYztZQUNqQyxLQUFLLEVBQUUscUNBQXFDO1NBQy9DO1FBQ0Qsc0JBQXNCO1FBQ3RCLCtDQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLCtDQUFRLENBQUMsU0FBUyxFQUFFO1FBQ3BDLCtDQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRWhFLGdEQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzNDLENBQUM7Q0EwQkoiLCJmaWxlIjoiLi9zcmMvbWFpbi9NYWluV2luZG93L2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXBjTWFpbiwgQnJvd3NlcldpbmRvdywgQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucyB9IGZyb20gXCJlbGVjdHJvblwiXHJcbmltcG9ydCBmaXJlYmFzZSwgeyBmaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5XaW5kb3cgZXh0ZW5kcyBCcm93c2VyV2luZG93IHtcclxuICAgIGRhdGFiYXNlOiBmaXJlc3RvcmUuRmlyZXN0b3JlXHJcbiAgICB0b2RvOiBhbnlcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXHJcblxyXG4gICAgICAgIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeUJWbHBteGo3UEdCTzVUSFd2QmFnZnE2MTJLcGlzbVZ2b1wiLFxyXG4gICAgICAgICAgICBhdXRoRG9tYWluOiBcImhlbGxvLWZpcmViYXNlLTFkNmZjLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2hlbGxvLWZpcmViYXNlLTFkNmZjLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgICAgICAgIHByb2plY3RJZDogXCJoZWxsby1maXJlYmFzZS0xZDZmY1wiLFxyXG4gICAgICAgICAgICBzdG9yYWdlQnVja2V0OiBcImhlbGxvLWZpcmViYXNlLTFkNmZjLmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjc2MDUwNzU4NTQwNVwiLFxyXG4gICAgICAgICAgICBhcHBJZDogXCIxOjc2MDUwNzU4NTQwNTp3ZWI6NTIxZGU3MzAzYTA3YTc0OVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB0aGlzLmZldGNoQ29sbGVjdGlvbilcclxuXHJcbiAgICAgICAgaXBjTWFpbi5vbignbG9naW5BdXRoJywgdGhpcy5sb2dpbkF1dGgpXHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5BdXRoID0gYXN5bmMgKGV2ZW50OiBhbnksIGFyZzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHJlcXVlc3QgcmVjZWl2ZWQnLCBhcmcpXHJcbiAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhcmcuZW1haWwsIGFyZy5wYXNzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiByZXF1ZXN0IGNvbXBsZXRlZCcsIHJlcyAmJiAnIHN1Y2Nlc3NmdWxseScpXHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSByZXMudXNlciA/IGBXZWxjb21lICR7cmVzLnVzZXIuZGlzcGxheU5hbWV9YCA6IGBMb2dpbiBVbnN1Y2Nlc3NmdWxgXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hDb2xsZWN0aW9uID0gKHVzZXI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZyBjb2xsZWN0aW9uJywgdXNlcilcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLmNvbGxlY3Rpb24oJ3RvZG9zJykuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZWwgPT4gdGhpcy50b2RvID0gZWwuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsZWN0aW9uIGZldGNoZWQnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kbyA9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29sbGVjdGlvbiBjbGVhcmVkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZU1zZyhtc2c6c3RyaW5nKSB7XHJcbiAgICAvLyAgICAgdGhpcy53ZWJDb250ZW50cy5zZW5kKCdjb25zb2xlTXNnJywgbXNnKVxyXG4gICAgLy8gfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/MainWindow/index.ts\n");

/***/ })

};