import El from "../../utils/El";
import { Form } from "../form/form";
import { TextField } from "../textField/textField";
import ButtonWithIcon from "../buttons/buttonWithIcon";
import { BtnLogin, BtnRegister } from "../menu";
//import { handleSubmitForm,handleErrors } from "../form/handleSubmitForms";
import Cookies from "js-cookie"

export const AuthForm = () => {
  return El({
    element: "div",
    className: "flex flex-col items-center justify-center",
    id: "auth",
    child: [
      El({
        element: "div",
        className: "flex w-full items-center gap-2 ",
        child: [
          ButtonWithIcon({
            title: "عضویت",
            classMore:
              " border rounded basis-1/2 bg-blue-400 text-white hover:bg-blue-100 hover:text-slate-700 ",
              idButton: "btnRegister",
              functionButton: BtnRegister,
           
          }),
          ButtonWithIcon({
            title: "ورود",
            classMore:
              "border rounded basis-1/2 bg-blue-400 text-white hover:bg-blue-100 hover:text-slate-700 ",
            idButton: "btnLogin",
            functionButton:BtnLogin,
          }),
        ],

      }),
      El({
        className: "w-full",
        element: "div",
        id: "auth-form",
        child: renderForms("register"),
      }),
    ],
  });
};

export const renderForms = (currentForm) => {
  if (currentForm === "register") {
    return Form({
      id: "register",
      className: "w-full mt-8 ",
      child: [
        TextField({
          label: "ایمیل خود را وارد کنید",
          placeholder: "مثال: test@gmail.com",
          name: "email",
          restAttrs: {
            "data-valid": false,
          },
        }),
        TextField({
          label: "نام خود را وارد کنید",
          placeholder: "مثال: ماهد جهانپور",
          name: "نام",
          restAttrs: {
            "data-valid": false,
          },
        }),
        TextField({
          label: "پسوند خود را وارد کنید",
          placeholder: "یک پسورد انتخاب کنید!",
          name: "password",
          restAttrs: {
            "data-valid": false,
          },
        }),
        ButtonWithIcon({
          classMore:
            "w-full mx-1 bg-blue-400 hover:bg-blue-100  text-white mt-2 w-24 flex justify-center hover:text-slate-700",
          title: "ارسال",
          //functionButton: "",
        }),
      ],
      handleSubmit(data) {
        console.log("handel submit");
        const locatedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const isExists = locatedUsers.find((u) => u.email === data.email);
        if (isExists) return alert("User Already Exists!");
        const newUsers = [...locatedUsers, data];
        localStorage.setItem(`users`, JSON.stringify(newUsers));
        // const drawer = document.getElementById("drawer")
        // drawer.classList.add("translate-x-full")
        // drawer.classList.remove("translate-x-0")
      },
      handleErrors(errors) {
        console.log(errors, "here");
      },
    });
  } else {
    return Form({
      className: "w-full mt-8 ",
      id: "login",
      child: [
        TextField({
          label: "ایمیل خود را وارد کنید",
          placeholder: "مثال: test@gmail.com",
          name: "email",
          restAttrs: {
            "data-valid": false,
          },
        }),
        TextField({
          label: "پسوند خود را وارد کنید",
          placeholder: "یک پسورد انتخاب کنید!",
          name: "password",
          restAttrs: {
            "data-valid": false,
          },
        }),
        ButtonWithIcon({
          classMore:
            "w-full mx-1 bg-blue-400 hover:bg-blue-100  text-white mt-2 w-24 flex justify-center hover:text-slate-700",
          title: "ارسال",
        }),
      ],

      handleSubmit(data) {
        const users = JSON.parse(localStorage.getItem("users"));
        const isUser = users.find((user) => user.email === data.email);
        if (!isUser) return alert("404 || User not found");
        const verifyPassword = isUser.password === data.password;
        if (!verifyPassword)
          return alert("404 || Username Or Password is Invalid!");
        const token = "JWT_fwqyt#34#$%3453454575bjhgfjWQE";
        Cookies.set('token', token, {
            expires: 7,
        })
        alert("شما با موفقیت لاگین شدید")
        //  const drawer = document.getElementById("drawer")
        //  drawer.classList.add("translate-x-full")
        //  drawer.classList.remove("translate-x-0")
        //  const navbarActions = document.querySelector('#nav-actions')
        // navbarActions.innerHTML = ''
        //   navbarActions.append(renderUserButtons())
      },
      handleErrors(errors) {
        console.log(errors, "here");
      },
    });
  }
};

//export default AuthForm;
