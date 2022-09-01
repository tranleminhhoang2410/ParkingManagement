
Controller - API					|	Authorization				|	Description																										|
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CityController:							k cần xác thực phân quyền		lấy tất cả hoặc theo id,.....
DistrictController:						k cần xác thực phân quyền		lấy tất cả hoặc theo id,.....
WardController :						k cần xác thực phân quyền		lấy tất cả hoặc theo id,.....
	
SlotController:
	GetAll:								k cần xác thực phân quyền		hiển thị tất cả lot lên page				
	GetAll/{typeId}:					user, admin						xem tất cả lot theo type (hình như không dùng) 
	Get/{Id}:							user, admin						xem chi tiết lot đc chọn
	Update:								user, admin						update lot (hình như thừa)

UserController:
	Get/Id/{Id}:						admin							admin tra cứu user bằng id (chắc k cần)
	GetLoggedUser:						user, admin						lấy thông tin người đăng nhập hiện tại
	Get/Email/{Email}:					admin							admin tra cứu user bằng email
	Get/Phone/{Phone}:					admin							admin tra cứu user bằng phone
	Update: user

VehicleController:
	AddVehicle:							user							user thêm xe
	Get/UserVehicle/{userId}:			user, admin						lọc xe theo user
	CheckIn/{SlotId}:					user							gọi khi click vô cái lot trống (k cần userid; tự lấy khi truyền jwt) (đã lọc xe theo loại lot và status)
	CheckIn:							user, admin						gọi khi xác nhận đỗ
	CheckOut/{SlotId}:					user, admin						gọi khi click vô cái lot có xe của user đang đăng nhập (userid như trên) (đã tính tiền)
	CheckOut:							user, admin						gọi khi xác nhân rời đi

VehicleTypeController:
	GetAll:								k cần xác thực phân quyền		cái này lấy khi chọn loại cho xe, hiển thị trang bảng giá
	Get/{Id}:							k cần xác thực phân quyền		cái này lấy khi chọn loại cho xe hay lọc bảng giá (nếu cần) 
	Update:								admin							admin update giá

AuthenticationController:
	Login:								k cần xác thực phân quyền		đăng nhập
	SignUp:								k cần xác thực phân quyền		đăng kí
	ChangePassword:						k cần xác thực phân quyền		đổi mk
	Logout:								user, admin						đăng xuất (bắt buộc phải đăng nhập)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*** Header của jwt token là Authorization ***
*** Jwt token là: bearer + token ***
