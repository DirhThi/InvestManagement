// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from "native-base";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrzhi1twgQmD_PyvksjnEQEbTS00gZzOA",
  authDomain: "investment-management-8fa4a.firebaseapp.com",
  projectId: "investment-management-8fa4a",
  storageBucket: "investment-management-8fa4a.appspot.com",
  messagingSenderId: "698970034210",
  appId: "1:698970034210:web:c20c990d91e69ab7ddfa7b",
  measurementId: "G-BML43Z239M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const RegisterAccount = async (email,password) => {
  createUserWithEmailAndPassword(auth,email, password)
  .then((userCredentials) => {
       const user = userCredentials.user;
       console.log("signup successfuled :" , user.email);
       navigation.navigate("login");
     })
     .catch((error) => console.log(error.message));
}

 export const LoginAccount = async (email,password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user)
    {
      Toast.show({ description: 'Đăng nhập thành công'});
      console.log("current user : ",user.email);
    }
    // ...
  })
  .catch((error) => 
      Toast.show({ description: "Tài khoản hoặc mật khẩu không chính xác"})
  );
}

export const LogoutAccount = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log('Error logging out:', error);
  }
}
