/* eslint-disable */
/**
 * 配置信息
 * @param {string} baseUrl 接口地址
 * @param {string} dataUrl 数据请求地址
 * @param {string} downloadUrl 下载地址
 * @param {string} uploadUrl 上传地址
 * @param {string} fileUrl 文件地址
 * @param {string} fileUpClient 文件提交地址
 * @param {string} fileImage 文件显示地址
 * @param {string} platformFlag 平台标识
 */
var PLATFORM_CONFIG = {};
//数据有关
PLATFORM_CONFIG.baseUrl = 'http://xxx.xxx.x.xx:xxxx/partner/';
PLATFORM_CONFIG.dataUrl = PLATFORM_CONFIG.baseUrl + 'data';
PLATFORM_CONFIG.downloadUrl = PLATFORM_CONFIG.baseUrl + 'downClient';
PLATFORM_CONFIG.uploadUrl = PLATFORM_CONFIG.baseUrl + 'upClient';
//文件有关
PLATFORM_CONFIG.fileUrl = 'http://xxx.xxx.x.xx/stif_fs/';
PLATFORM_CONFIG.fileUpClient = PLATFORM_CONFIG.fileUrl + 'upClient';
PLATFORM_CONFIG.fileImage = PLATFORM_CONFIG.fileUrl + 'image';
//平台标识
PLATFORM_CONFIG.platformFlag = 'partner_';
