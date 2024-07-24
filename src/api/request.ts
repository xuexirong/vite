import axios from 'axios'

const errorDefault = '系统问题，请联系客服'
const request = axios.create({
    baseURL: 'http://47.94.141.80:8080/wgcrm',
    withCredentials: false,
    timeout: 20000
})

request.interceptors.request.use(
    config => {
        const token = '47b72b8b48cd11ef9f6c00163e06b799'
        if (token) {
            config.headers.accesstoken = `${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        // 业务正常，只返回data数据
        console.log(response.data)
        // 检查是否为 Blob 类型的文件下载请求
        if (response.config.responseType === 'blob') {
            return response.data; // 结束处理，不返回Promise，因为已经处理了下载逻辑
        }
        if (response.data.status === 0) {
            return response.data.data
        }
        // 业务状态码错误
        const errorMsg = {
            code: -1,
            msg: undefined
        }

        errorMsg.code = response.data.status
        errorMsg.msg = response.data.message
        switch (response.data.status) {
            case 201: // 认证异常，跳转到登录页
                console.error('认证过期,请重新登录', 3)
                setTimeout(() => {
                    location.href = '/#/login'
                }, 1500)
                break
            case 422: // 认证异常，跳转到登录页
                console.error('认证异常-----', 3)
                // Email必须是一个有效的邮箱, Password为必填字段, Code为必填字段
                console.log(response.data.message)
                // eslint-disable-next-line no-case-declarations
                const result = response.data.message.split(', ')
                errorMsg.msg = {}
                result.forEach(item => {
                    console.log(item)
                    if (item.startsWith('Email')) {
                        errorMsg.msg.Email = item.replace('Email', '')
                    }
                    if (item.startsWith('Phone')) {
                        errorMsg.msg.Phone = item.replace('Phone', '')
                    }
                    if (item.startsWith('Password')) {
                        errorMsg.msg.Password = item.replace('Password', '')
                    }
                    if (item.startsWith('Code')) {
                        errorMsg.msg.Code = item.replace('Code', '')
                    }
                    if (item.startsWith('Username')) {
                        errorMsg.msg.Username = item.replace('Username', '')
                    }
                })
                break
            default: // 未识别的异常
                errorMsg.msg = response.data.message ? response.data.message : errorDefault
                break
        }
        if (errorMsg.msg === undefined || errorMsg.msg === '') {
            errorMsg.msg = errorDefault
        }
        return Promise.reject(errorMsg)
    },
    error => { // http状态码非正常
        // 错误吗和信息，同时返回，方便有时候要用
        const errorMsg = {
            code: -1,
            msg: undefined
        }
        switch (error.code) {
            case 'ECONNABORTED':
                // console.error('请求网络超时，请联系开发人员进行排查...', 5)
                break
            default:
                errorMsg.code = error.response.status
                errorMsg.msg = error.response.message ? error.response.message : errorDefault
                switch (error.response.status) {
                    default: // 未识别的异常
                    //  console.error(`网络异常[${error.code}]: ${error.message}`, 3)
                }
        }
        if (errorMsg.msg === undefined || errorMsg.msg === '') {
            errorMsg.msg = errorDefault
        }
        return Promise.reject(errorMsg)
    })

export default request
