Feature: Login

    Background: Resize Page
        Given Change size off page
    
    Scenario Outline: Check Login
        Given We visit VCPMC website to login page
        When Change languages
        And login with "<username>" and "<password>"
        Then Assert login sucessful "<noti>"
        #And Assert user "<username>"
    Examples:
        | username | password | noti |
        | huu.diep@alta.com.vn  | Huu@1234  | Đăng nhập thành công  |
        | huyen@alta.com.vn  | Huyen@123  | Tài khoản người dùng đã hết hạn  |
        | huyen@alta.com | Huyen@123  | Tên đăng nhập không tồn tại  |
        #| huu.diep@alta.com.vn | huyen  |  Mật khẩu người dùng không đúng  |
