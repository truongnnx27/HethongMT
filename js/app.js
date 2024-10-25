import { products, coso, users } from "./data.js";
const hienProduct = (product) => {
    return `<div>
       <img src="${product.image}">
        <h4>Tên sản phẩm: ${product.ten_sp}</h4>
        <p>Giá: ${product.gia}</p>
        <button class="order-btn">Mua</button>
    </div>`;
};
export const showlistProduct = () => {
    const html_arr = products.map(hienProduct);
    return html_arr.join("");
};
export const searchProduct = (keyword) => {
    const keywordLower = keyword.toLowerCase();
    const matchedProducts = products.filter(product => product.ten_sp.toLowerCase().includes(keywordLower));
    const remainingProducts = products.filter(product => !product.ten_sp.toLowerCase().includes(keywordLower));
    const orderedProducts = [...matchedProducts, ...remainingProducts];
    return orderedProducts.map(hienProduct).join("");
};
export const showSearchSuggestions = (keyword) => {
    const keywordLower = keyword.toLowerCase();
    const matchedProducts = products.filter(product => product.ten_sp.toLowerCase().startsWith(keywordLower));
    if (matchedProducts.length > 0) {
        return matchedProducts
            .map(product => `<li>${product.ten_sp}</li>`)
            .join("");
    }
    else {
        return `<li>Không tìm thấy sản phẩm</li>`;
    }
};
const loginBtn = document.querySelector(".login-btn");
const logoutBtn = document.querySelector(".logout-btn");
const registerBtn = document.querySelector(".register-btn");
const userInfo = document.querySelector(".user-info");
const loginForm = document.querySelector("#login-form");
const submitLogin = document.querySelector("#submit-login");
const cancelLogin = document.querySelector("#cancel-login");
loginBtn.addEventListener("click", function () {
    loginForm.style.display = "block";
});
cancelLogin.addEventListener("click", function () {
    loginForm.style.display = "none";
});
submitLogin.addEventListener("click", function () {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    const loggedUser = users.find(user => user.email === email && user.password === password);
    if (loggedUser) {
        sessionStorage.setItem("user", JSON.stringify(loggedUser));
        userInfo.textContent = `Xin chào: ${loggedUser.fullname}`;
        userInfo.style.display = "block";
        loginBtn.style.display = "none";
        logoutBtn.style.display = "block";
        registerBtn.style.display = "none";
        loginForm.style.display = "none";
        alert("Đăng nhập thành công");
    }
    else {
        alert("Email hoặc mật khẩu không đúng!");
    }
});
logoutBtn.addEventListener("click", function () {
    sessionStorage.removeItem("user");
    userInfo.style.display = "none";
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
    registerBtn.style.display = "block";
    alert("Đăng xuất thành công");
});
const phaiUser = (phai) => {
    if (typeof phai == 'boolean') {
        if (phai == true)
            return "Nữ";
        else
            return "Nam";
    }
    else
        return phai;
};
const hienCoso = (coso) => {
    return `<div>
        <img src="${coso.hinh}">
        <h4>${coso.ten}</h4>
        <p>${coso.diachi}</p>
    </div>`;
};
export const showlistCoso = () => {
    const html_arr = coso.map(hienCoso);
    return html_arr.join("");
};
