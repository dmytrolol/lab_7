// import { TestBed } from '@angular/core/testing';
// import { AuthService } from './auth.service';
// import { Auth } from '@angular/fire/auth';
// import { BehaviorSubject } from 'rxjs';

// // Мок для Firebase Auth
// class MockAuth {
//   currentUser = null; // Спочатку немає користувача

//   signInWithEmailAndPassword(email: string, password: string) {
//     return Promise.resolve({ user: { email } }); // Повертаємо мок користувача
//   }

//   createUserWithEmailAndPassword(email: string, password: string) {
//     return Promise.resolve({ user: { email } });
//   }

//   signOut() {
//     this.currentUser = null; // При виклику signOut ми робимо користувача null
//     return Promise.resolve();
//   }
// }

// // Мок для BehaviorSubject
// class MockBehaviorSubject {
//   private subject = new BehaviorSubject(null);

//   asObservable() {
//     return this.subject.asObservable();
//   }

//   next(value: any) {
//     this.subject.next(value);
//   }
// }

// describe('AuthService', () => {
//   let authService: AuthService;
//   let mockAuth: MockAuth;

//   beforeEach(() => {
//     mockAuth = new MockAuth();
//     TestBed.configureTestingModule({
//       providers: [
//         AuthService,
//         { provide: Auth, useValue: mockAuth }, // Мокаємо Auth
//         { provide: BehaviorSubject, useClass: MockBehaviorSubject } // Мокаємо BehaviorSubject
//       ]
//     });
//     authService = TestBed.inject(AuthService);
//   });

//   it('should be created', () => {
//     expect(authService).toBeTruthy();
//   });

//   it('should login the user', async () => {
//     const email = 'test@example.com';
//     const password = 'password123';

//     const result = await authService.login(email, password);

//     expect(result).toEqual({ user: { email } });
//   });

//   it('should register a user', async () => {
//     const email = 'test@example.com';
//     const password = 'password123';

//     const result = await authService.register(email, password);

//     expect(result).toEqual({ user: { email } });
//   });

//   it('should logout the user', async () => {
//     await authService.logout();

//     expect(mockAuth.currentUser).toBeNull();
//   });

//   it('should return the current user', () => {
//     const mockUser = { email: 'test@example.com' };
//     mockAuth.currentUser = mockUser;

//     const currentUser = authService.getCurrentUser();

//     expect(currentUser).toEqual(mockUser);
//   });

//   it('should update currentUser$ when onAuthStateChanged is triggered', () => {
//     const mockUser = { email: 'test@example.com' };

//     // Мокування onAuthStateChanged
//     const behaviorSubject = TestBed.inject(BehaviorSubject);
//     behaviorSubject.next(mockUser); // Оновлюємо значення в BehaviorSubject

//     authService.currentUser$.subscribe(user => {
//       expect(user).toEqual(mockUser);
//     });
//   });
// });
