import {
    get,
    get2,
    post,
    destroy,
    put
} from './http';

const Api = {
    Role: {
        List() {
            return get('/api/v2/roles');
        }
    },
    Search: {
        Index(params) {
            return get(`/api/v3/search`, params);
        }
    },
    Auth: {
        SmsLogin(params) {
            return post('/api/v2/login/mobile', params);
        },
        PasswordLogin(params) {
            return post('/api/v2/login/password', params);
        },
        WechatMiniLogin(params) {
            return post('/api/v2/wechat/mini/login', params);
        },
        WechatMiniLoginState(params) {
            return post('/api/v2/login/wechatMini', params);
        },
        WechatMiniLoginMobile(params) {
            return post('/api/v2/login/wechatMiniMobile', params);
        }
    },
    Other: {
        Captcha() {
            return get('/api/v2/captcha/image');
        },
        SendSms(params) {
            return post('/api/v2/captcha/sms', params);
        },
        Config() {
            return get('/api/v2/other/config');
        }
    },
    ViewBlock: {
        PageBlocks(params) {
            return get(`/api/v2/viewBlock/page/blocks`, params);
        },
        Sliders(params) {
            return get(`/api/v2/sliders`, params);
        },
    },
    Course: {
        List(params) {
            return get('/api/v2/courses', params);
        },
        Detail(id) {
            return get('/api/v2/course/' + id);
        },
        Comments(id) {
            return get('/api/v2/course/' + id + '/comments');
        },
        Collect(id) {
            return get('/api/v2/course/' + id + '/like');
        },
        SubmitComment(id, params) {
            return post('/api/v2/course/' + id + '/comment', params);
        },
        Video(id) {
            return get('/api/v2/video/' + id);
        },
        VideoComments(id) {
            return get('/api/v2/video/' + id + '/comments');
        },
        SubmitVideoComment(id, params) {
            return post('/api/v2/video/' + id + '/comment', params);
        },
        PlayInfo(id, params) {
            return get('/api/v2/video/' + id + '/playinfo', params);
        },
        VideoRecord(id, params) {
            return post('/api/v2/video/' + id + '/record', params);
        },
        Categories() {
            return get('/api/v2/course_categories');
        }
    },
    User: {
        Detail() {
            return get(`/api/v2/member/detail`);
        },
        Orders(params) {
            return get('/api/v2/user/orders', params);
        },
        Courses(params) {
            return get('/api/v2/member/courses', params);
        },
        LikeCourses(params) {
            return get('/api/v2/member/courses/like', params);
        },
    },
    Member: {
        Detail() {
            return get('/api/v2/member/detail');
        },
        NicknameChange(params) {
            return post('/api/v2/member/detail/nickname', params);
        },
        AvatarChange(params) {
            return post('/api/v2/member/avatar', params);
        },
        MobileVerify(params) {
            return post('/api/v2/member/verify', params);
        },
        MobileChange(params) {
            return put('/api/v2/member/mobile', params);
        },
        NewMobile(params) {
            return post('/api/v2/member/detail/mobile', params);
        },
        PasswordChange(params) {
            return post('/api/v2/member/detail/password', params);
        },
        WechatLogin() {
            return get('/api/v2/login/wechatScan');
        },
        WechatBind() {
            return get('/api/v2/member/wechatScan/bind');
        },
        CheckWechatLogin(params) {
            return get('/api/v2/login/wechatScan/query', params);
        },
        CancelBind(app) {
            return destroy(`/api/v2/member/socialite/${app}`)
        },
        Profile() {
            return get('/api/v2/member/profile');
        },
        ProfileSave(params) {
            return post('/api/v2/member/profile', params);
        },
        Credit1Records(params) {
            return get('/api/v2/member/credit1Records', params);
        },
        PromoCode() {
            return get('/api/v2/member/promoCode')
        },
        PromoCodeCreate() {
            return post('/api/v2/member/promoCode')
        },
        Withdraw(params) {
            return post('/api/v2/member/withdraw', params)
        },
        InviteUsers(params) {
            return get('/api/v2/member/inviteUsers', params);
        },
        WithdrawRecords(params) {
            return get('/api/v2/member/withdrawRecords', params);
        },
        InviteBalanceRecords(params) {
            return get('/api/v2/member/inviteBalanceRecords', params);
        },
        Messages(params) {
            return get('/api/v2/member/messages', params);
        },
        Zhengshus(params) {
            return get2('/api/user_zhengshu', params);
        },
        ReadMessage(id) {
            return get('/api/v2/member/notificationMarkAsRead/' + id);
        },
        Orders(params) {
            return get('/api/v2/member/orders', params);
        },
        Courses(params) {
            return get('/api/v2/member/courses', params);
        }
    },
    Order: {
        Payments(params) {
            return get('/api/v2/order/payments', params);
        },
        PromoCodeCheck(code) {
            return get('/api/v2/promoCode/' + code + '/check');
        },
        CreateCourseOrder(params) {
            return post('/api/v2/order/course', params);
        },
        CreateVideoOrder(params) {
            return post('/api/v2/order/video', params);
        },
        CreateRoleOrder(params) {
            return post('/api/v2/order/role', params);
        },
        PayWechatScan(params) {
            return post('/api/v2/order/pay/wechatScan', params);
        },
        HandPay() {
            return get('/api/v2/order/pay/handPay');
        },
    },
    MultiLevelShare: {
        User() {
            return get('/addons/MultiLevelShare/api/v1/user');
        },
    },

}

export default Api;