(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{453:function(s,t,n){"use strict";n.r(t);var a=n(2),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"},[s._v("版本警告")]),t("p",[s._v("真寻Bot需要python环境为 "),t("strong",[s._v("python3.9+")])])]),t("h1",{attrs:{id:"开始部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始部署"}},[s._v("#")]),s._v(" 开始部署")]),s._v(" "),t("ol",[t("li",[s._v("从 "),t("a",{attrs:{href:"https://github.com/HibiKier/zhenxun_bot",target:"_blank",rel:"noopener noreferrer"}},[s._v("HibiKier / zhenxun_bot"),t("OutboundLink")],1),s._v(" clone代码 或 直接下载 "),t("a",{attrs:{href:"https://github.com/HibiKier/zhenxun_bot/archive/refs/heads/main.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("压缩包"),t("OutboundLink")],1),s._v(" 解压")]),s._v(" "),t("li",[s._v("安装依赖包")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" poetry     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用poetry管理python包")]),s._v("\npoetry "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n\npoetry shell            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入虚拟环境")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## playwright 需要安装额外的系统环境，在命令行输入以下")]),s._v("\nplaywright "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" chromium\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在Linux环境还需要安装额外依赖")]),s._v("\nplaywright install-deps chromium\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("设置超级用户，打开 "),t("strong",[s._v(".env.dev")]),s._v(" 文件，在"),t("code",[s._v("SUPERUSERS")]),s._v("和"),t("code",[s._v("qq")]),s._v("中添加自己的QQ")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("SUPERUSERS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456789"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nPLATFORM_SUPERUSERS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" '\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qq"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456789"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dodo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kaiheila"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discord"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("首次运行后会在data目录下生成 "),t("strong",[s._v("database.json")]),s._v("(数据库配置) 和 "),t("strong",[s._v("config.yaml")]),s._v("(插件配置) 文件")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库（必要）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果填写了bind就不需要再填写后面的字段了#）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 示例："bind": "postgres://user:password@127.0.0.1:5432/database"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bind"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sql_name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgres"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 地址")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"port"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 如果你是与教程一模一样的命令代码，且数据库也在该服务器上 ###")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以直接复制以下配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bind"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sql_name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgres"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postgres"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhenxun_bot"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 地址")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"port"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5432"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhenxun_bot"')]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("启动真寻，会在 "),t("strong",[s._v("configs")]),s._v(" 和 "),t("strong",[s._v("data/configs")]),s._v(" 目录下生成各种配置文件")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("python3 bot.py\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\npython bot.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("提示")]),t("p",[s._v("首次启动会下载资源，时间较久，请耐心等待")])]),t("h2",{attrs:{id:"当你的控制台出现以下日志-说明你已经成功了🎉🎉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当你的控制台出现以下日志-说明你已经成功了🎉🎉"}},[s._v("#")]),s._v(" 当你的控制台出现以下日志，说明你已经成功了🎉🎉")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("08-14 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":18:44 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" zhenxun "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CMD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Web UI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" API启动成功\n08-14 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":18:44 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" uvicorn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Application startup complete.\n08-14 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":18:44 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" uvicorn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Uvicorn running on http://127.0.0.1:8080 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press CTRL+C to quit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"})])])}),[],!1,null,null,null);t.default=r.exports}}]);