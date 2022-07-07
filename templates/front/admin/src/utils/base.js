const base = {
    get() {
        return {
            url : "http://localhost:8080/djangopm60z/",
            name: "djangopm60z",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "学生成绩管理系统"
        } 
    }
}
export default base
