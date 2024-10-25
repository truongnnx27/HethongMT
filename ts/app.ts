import { TCoso,TGioitinh,TProducts,TTUser } from "./data.js";
import { products,coso,users,spthuocCS } from "./data.js";
import Swal from "sweetalert2";


const hienProduct = (product:TProducts)=>{
    return `<div>
       <img src="${product.image}">
        <h4>Tên sản phẩm: ${product.ten_sp}</h4>
        <p>Giá: ${product.gia}</p>
        <button class="order-btn">Mua</button>
    </div>`
}

export const showlistProduct = () =>{
    const html_arr = products.map(hienProduct);
    return html_arr.join("");
}

// Hàm tìm kiếm sản phẩm và đẩy sản phẩm khớp lên đầu
export const searchProduct = (keyword) => {
    const keywordLower = keyword.toLowerCase();
    
    // Tìm những sản phẩm khớp với từ khóa
    const matchedProducts = products.filter(product =>
      product.ten_sp.toLowerCase().includes(keywordLower)
    );
  
    // Lọc ra những sản phẩm không khớp với từ khóa
    const remainingProducts = products.filter(product =>
      !product.ten_sp.toLowerCase().includes(keywordLower)
    );
  
    // Kết hợp danh sách sản phẩm khớp và không khớp (sản phẩm khớp sẽ ở đầu)
    const orderedProducts = [...matchedProducts, ...remainingProducts];
  
    // Trả về HTML hiển thị các sản phẩm
    return orderedProducts.map(hienProduct).join("");
  };
  
  // Hàm hiển thị gợi ý tìm kiếm dựa trên ký tự đầu
  export const showSearchSuggestions = (keyword) => {
    const keywordLower = keyword.toLowerCase();
  
    // Tìm những sản phẩm khớp với từ khóa
    const matchedProducts = products.filter(product =>
      product.ten_sp.toLowerCase().startsWith(keywordLower)
    );
  
    // Trả về HTML hiển thị các sản phẩm gợi ý
    if (matchedProducts.length > 0) {
      return matchedProducts
        .map(product => `<li>${product.ten_sp}</li>`)
        .join("");
    } else {
      return `<li>Không tìm thấy sản phẩm</li>`;
    }
  };


  //Hàm đăng nhập
  const loginBtn = document.querySelector(".login-btn") as HTMLButtonElement;
  const logoutBtn = document.querySelector(".logout-btn") as HTMLButtonElement;
  const registerBtn= document.querySelector(".register-btn") as HTMLButtonElement;
  const userInfo = document.querySelector(".user-info") as HTMLSpanElement;
  const loginForm = document.querySelector("#login-form") as HTMLDialogElement;
  const submitLogin = document.querySelector("#submit-login") as HTMLButtonElement;
  const cancelLogin = document.querySelector("#cancel-login") as HTMLButtonElement;

  //hiển thị form đăng nhập
  loginBtn.addEventListener("click",function(){
    loginForm.style.display ="block";
  });

  //hủy form
  cancelLogin.addEventListener("click",function(){
    loginForm.style.display = "none";
  })

  submitLogin.addEventListener("click",function(){
    const email = (document.querySelector("#login-email")as HTMLInputElement).value;
    const password = (document.querySelector("#login-password")as HTMLInputElement).value;

    const loggedUser = users.find(user => user.email === email && user.password === password);

    if(loggedUser)
    {
        //đăng nhập thành công lưu vào storage
        sessionStorage.setItem("user",JSON.stringify(loggedUser));

        //hiển thị thông tin người dùng
        userInfo.textContent = `Xin chào: ${loggedUser.fullname}`;
        userInfo.style.display = "block";
        loginBtn.style.display = "none";
        logoutBtn.style.display= "block";
        registerBtn.style.display ="none";

        loginForm.style.display ="none";
        alert("Đăng nhập thành công")
    }else{
        alert("Email hoặc mật khẩu không đúng!")
    }
  });

  // Hàm đăng xuất
logoutBtn.addEventListener("click", function () {
    // Xóa thông tin người dùng khỏi sessionStorage
    sessionStorage.removeItem("user");

    // Ẩn thông tin người dùng, hiển thị lại nút đăng nhập và đăng ký
    userInfo.style.display = "none";
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    registerBtn.style.display = "block";

    // Hiển thị thông báo đăng xuất thành công
    alert("Đăng xuất thành công");
});

  

const phaiUser =(phai:TGioitinh)=>{
    if(typeof phai=='boolean')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    {
        if(phai==true) return "Nữ";
        else return "Nam";
    }else return phai as string;
}

const hienCoso= (coso:TCoso)=>{
    return `<div>
        <img src="${coso.hinh}">
        <h4>${coso.ten}</h4>
        <p>${coso.diachi}</p>
    </div>`
}

export const showlistCoso=()=>{
    const html_arr= coso.map(hienCoso);
    return html_arr.join("")
}


