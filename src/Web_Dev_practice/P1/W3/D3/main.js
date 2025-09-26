//? --------------1--------------
// class PaymentMethod {
//   constructor(type) {
//     if (new.target === PaymentMethod) {
//       throw new Error('Cannot instantiate abstract class directly!');
//     }
//     this.type = type;
//   }
//   pay(amount) {
//     throw new Error('pay() must be implemented in subclass!');
//   }
// }

// class CreditCardPayment extends PaymentMethod {
//   constructor(cardNumber) {
//     super('CreditCard');
//     this.cardNumber = cardNumber;
//   }
//   pay(amount) {
//     if (!/^\d{16}$/.test(this.cardNumber)) {
//       throw new Error('Invalid card number: must be 16 digits.');
//     }
//     console.log(`Successfully paid ${amount} using ${this.type}`);
//   }
// }

// class PayPalPayment extends PaymentMethod {
//   constructor(email) {
//     super('PayPal');
//     this.email = email;
//   }
//   pay(amount) {
//     if (!this.email.includes('@')) {
//       throw new Error('Invalid PayPal email address.');
//     }
//     console.log(`Successfully paid ${amount} using ${this.type}`);
//   }
// }

// class CryptoPayment extends PaymentMethod {
//   constructor(walletAddress) {
//     super('Crypto');
//     this.walletAddress = walletAddress;
//   }
//   pay(amount) {
//     if (!this.walletAddress || this.walletAddress.length < 10) {
//       throw new Error('Invalid crypto wallet address (min 10 chars).');
//     }
//     console.log(`Successfully paid ${amount} using ${this.type}`);
//   }
// }

// function processPayments(paymentMethods, amount) {
//   paymentMethods.forEach((method) => {
//     try {
//       method.pay(amount);
//     } catch (err) {
//       console.error(`[${method.type}] Error: ${err.message}`);
//     }
//   });
// }

// const payments = [
//   new CreditCardPayment('1234567890123456'),
//   new PayPalPayment('test@example.com'),
//   new CryptoPayment('0x1234567890abcdef'),
// ];

// processPayments(payments, 100);

//? --------------2--------------
// class Logger {
//   constructor() {
//     if (new.target === Logger) {
//       throw new Error('Cannot instantiate Logger directly!');
//     }
//   }

//   log(message) {
//     throw new Error('log() must be implemented!');
//   }
// }

// class ConsoleLogger extends Logger {
//   log(message) {
//     console.log(message);
//   }
// }

// class FileLogger extends Logger {
//   constructor() {
//     super();
//     this.fileStorage = [];
//   }

//   log(message) {
//     this.fileStorage.push(message);
//   }
// }

// class RemoteLogger extends Logger {
//   constructor() {
//     super();
//     this.remoteStorage = [];
//   }

//   log(message) {
//     this.remoteStorage.push(message);
//   }
// }

// class AppLogger {
//   constructor(loggerStrategy) {
//     this.loggerStrategy = loggerStrategy;
//   }

//   setStrategy(logger) {
//     this.loggerStrategy = logger;
//   }

//   log(message) {
//     this.loggerStrategy.log(message);
//   }
// }

// // Example usage
// const appLogger = new AppLogger(new ConsoleLogger());
// appLogger.log('First message');

// // Switch to FileLogger
// appLogger.setStrategy(new FileLogger());
// appLogger.log('Second message');
// // Switch to RemoteLogger
// appLogger.setStrategy(new RemoteLogger());
// appLogger.log('Third message');

//? --------------3--------------
// class Notification {
//   constructor(message) {
//     if (new.target === Notification)
//       throw new Error('Cannot instantiate abstract class directly!!');
//     this.message = message;
//   }
//   send() {
//     throw new Error('Cannot call it directly without overriding!!');
//   }
// }
// class EmailNotification extends Notification {
//   constructor({ message, recipientEmail }) {
//     super(message);
//     this.recipientEmail = recipientEmail;
//   }
//   send() {
//     console.log('sending email');
//   }
// }
// class SMSNotification extends Notification {
//   constructor({ message, phoneNumber }) {
//     super(message);
//     this.phoneNumber = phoneNumber;
//   }
//   send() {
//     console.log('sending SMS');
//   }
// }
// class PushNotification extends Notification {
//   constructor({ message, deviceId }) {
//     super(message);
//     this.deviceId = deviceId;
//   }
//   send() {
//     console.log('sending push notification');
//   }
// }
// const types = { email: EmailNotification, sms: SMSNotification, push: PushNotification };
// Object.freeze(types);
// function createNotification(type, options) {
//   if (!Object.keys(types).includes(type))
//     throw new Error('Notification type must be either email, sms or push.');
//   return new types[type](options);
// }

// const email = createNotification('email', {
//   message: 'Hello!',
//   recipientEmail: 'user@example.com',
// });
// email.send();

// const sms = createNotification('sms', {
//   message: 'Hi!',
//   phoneNumber: '1234567890',
// });
// sms.send();

// const push = createNotification('push', {
//   message: 'Ping!',
//   deviceId: 'DEVICE123',
// });
// push.send();
