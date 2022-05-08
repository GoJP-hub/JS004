module.exports = {
    "appenders": {
        // 用途別ログファイルの設定
        "access": {
            "type": "dateFile",
            "filename": "./logs/access.log"
        },
        "error": {
            "type": "dateFile",
            "filename": "./logs/error.log"
        },
        "system": {
            "type": "dateFile",
            "filename": "./logs/system.log"
        },
        // 標準出力対象の設定
        "console": {
            "type": "console"
        },
        "stdout": {
            "type": "stdout"
        }
    },
    "categories": {
        "default": {
            "appenders": [
                "access",
                "console",
                "stdout"
            ],
            "level": "INFO"
        },
        "access": {
            "appenders": [
                "access",
                "console",
                "stdout"
            ],
            "level": "INFO"
        },
        "system": {
            "appenders": [
                "system",
                "console",
                "stdout"
            ],
            "level": "ALL"
        },
        "error": {
            "appenders": [
                "error",
                "console",
                "stdout"
            ],
            "level": "WARN"
        }
    }
}