function callAppBox(jobCode, appData) {
    console.log("function callAppBox(jobCode, appData)");

    const mobileType = navigator.userAgent.toLowerCase();
    var userAgent = window.navigator.userAgent.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent );


    var message = {
                'code': jobCode,
                'param': appData
    }

    if (ios) {
        window.webkit.messageHandlers.appFunc.postMessage(message);
    } else if(mobileType.indexOf('android') > -1 ) {
        window.androidCallAppBox.appFunc(JSON.stringify(message));
    } else {
        alert(JSON.stringify(message));
    };


} 




function getDemoData(code, list){
    var appData = {};

    switch(code){
    case 1010: 
        appData = {
                    "require": false,
                    "message": "마켓에 새로운 버전이 있습니다. 업데이트 하시겠습니까?",
                    "appstore": "https://www.apple.com/app-store/",
                    "googleplay": "https://play.google.com/store/games",
                    "updatebutton": "업데이트 하기",
                    "cancelbutton": "다음에",
                    "returnFunc": "updateReturn"
            }
        break;
    case 1020:
        appData ={
                    "visible": true,
                    "backColor": "#FFFFFF",             // 기본값 : #FFFFFF
                    "fontSize": 13,                     // 기본값 : 12
                    "defTextColor": "#000000",              
                    "selTextColor": "#999999",
                    "autoHidden": false,
                    "menu": [
                        {
                            "text": "홈",
                            "defIcon": "https://pk4u.kr/doc/appbox/abicon001.png",
                            "actionUrl": "https://www.pk4u.kr/doc/appbox/appbox.html"
                        },
                        {
                            "text": "서비스",
                            "defIcon": "https://pk4u.kr/doc/appbox/abicon002.png",
                            "actionUrl": "https://www.appbox.kr"
                        },
                        {
                            "text": "헬스케어",
                            "defIcon": "https://pk4u.kr/doc/appbox/abicon003.png",
                            "actionUrl": "https://www.google.com/"
                        },
                        {
                            "text": "어바웃",
                            "defIcon": "https://pk4u.kr/doc/appbox/abicon004.png",
                            "actionUrl": "https://www.mobpa.co.kr/"
                        },
                        {
                            "text": "설정",
                            "defIcon": "https://pk4u.kr/doc/appbox/abicon005.png",
                            "actionUrl": "https://www.pk4u.kr/doc/appbox/appbox.html"
                        }
                    ]
                }
                break;
            case 1021:
                appData ={
                        "direction": "right",                   // 방향 : left, right
                        "profileIcon": "https://i.pinimg.com/736x/b4/e2/ed/b4e2edce94ef882fe299580493cc9a4a.jpg",
                        "profileText": "안녕하세요",
                        "fontSize": 15,             
                        "profileFontSize": 22,  
                        "profileAction": "https://www.appbox.kr",
                        "menu": [
                            {
                                "text": "홈",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon001.png",
                                "selIcon": "https://pk4u.kr/doc/appbox/abicon001.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "서비스  ",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon002.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "헬스케어",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon003.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "어바웃 ",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon004.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "아웃도어",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon005.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "어린이생활",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon006.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "첫번째 금융",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon007.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "우리프랜드",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon008.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "경영 연구소",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon009.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "달력 금융 ",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon010.png",
                                "selIcon": "https://pk4u.kr/doc/appbox/abicon010.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "자산 전략 ",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon011.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "방송 덩더쿵",
                                "defIcon": "https://pk4u.kr/doc/appbox/tab_d.png",
                                "selIcon": "https://pk4u.kr/doc/appbox/tab_d_sel.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "운영개선의 성과",
                                "defIcon": "https://pk4u.kr/doc/appbox/tab_d.png",
                                "selIcon": "https://pk4u.kr/doc/appbox/tab_d_sel.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "어바웃",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon012.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "어바웃",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon013.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "어바웃",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon014.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "어바웃",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon015.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "설정",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon016.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "설정",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon017.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "설정",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon018.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "설정",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon019.png",
                                "actionUrl": "https://m.naver.com/"
                            },
                            {
                                "text": "설정",
                                "defIcon": "https://pk4u.kr/doc/appbox/abicon020.png",
                                "actionUrl": "https://m.naver.com/"
                            }
                        ]
                }
        
        break;
    case 1022:
        appData ={
                        "visible": true,    
                        "autoHidden": true,                 
                        "menu": [
                            {
                                "function": "back"
                            },
                            {
                                "function": "forward"
                            },
                            {
                                "function": "home"
                            },
                            {
                                "function": "refresh"
                            },
                            {
                                "function": "share"
                            }
                        ]
                }
                break;
            case 1030:
                appData = {
                "message": "공유하려는 텍스트"
            }
            break;
        case 1040:
            appData = {
                "message": "정상적으로 처리 되었습니다.",
                "delaysecond": 1.5
            };
            break;
        case 1050:
            appData = {
                "vibrationcount": 3, // 진동 횟수
                "type": "long" // long: 길게, short: 짧게,  haptic: 햅틱
            };
            break;
        case 1060:
            appData = {
                "loadingIcon": "https://pk4u.kr/doc/appbox/appbox_loading2.gif",   // 로딩 아이콘 URL
                "width": 10 // 스크린 가로 사이즈 대비 비율, 13을 입력하면 스크린 화면사이즈의 13%로 설정되며, 세로는 가로와 동일한 사이즈로 잡힙니다.
            };
            break;
        case 1070:
            appData = {
                "returnFunc": "bodyReturn"   
            };
            break;
        case 1080:
            appData = {
                "url": "https://www.appbox.kr"   // 이동할 URL
            };
            break;
        case 1090:
            appData = {
               "android_scheme" : "metlife360health://metlife360health",    // Android Schema
               "ios_scheme" : "metlife360health://metlife360health",        // iOS Schema
               "googleplay_url" : "https://play.google.com/play",           // Google Play Url
               "appstore_url" : "https://apple.com/apple/apple"             // Apple AppStre Url
            };
            break;
        case 1100:
            appData = {
                "returnFunc": "QRReaderReturn" // 리턴 함수명 (QR결과 String)
            };
            break;
        case 1110:
            appData = {
                "returnFunc": "barCodeReaderReturn" // 리턴 함수명 (QR결과 String)
            };
            break;
        case 1120:
            appData = { // QR로 생성될 데이터
                "qr": "https://www.appbox.kr"
            };
            break;
        case 1130:
            appData = {
                "barcode": "https://www.mobpa.co.kr"
            };
            break;
        case 1140:
            appData = {
                "tel": "01012345678" // 전화번호
            };
            break;
        case 1150:
            appData = {
                "target": "01011112222", // 받는 사람 번호
                "message": "문자 메시지 입니다." //문자 메시지 내용
            };
            break;
        case 1160:
            appData = {
                "item": [
                    {
                        "image": "https://pk4u.kr/doc/appbox/appbox_events04.jpg", // 노출 이미지
                        "url": "https://www.appbox.kr", // 이동 URL
                        "browser": true, // true : 외부 브라우저, false : 내부 웹뷰
                    },
                    {
                        "image": "https://pk4u.kr/doc/appbox/appbox_events03.jpg", // 노출 이미지
                        "url": "https://www.mobpa.co.kr", // 이동 URL
                        "browser": false, // true : 외부 브라우저, false : 내부 웹뷰
                    },
                    {
                        
                        "image": "https://pk4u.kr/doc/appbox/appbox_events02.jpg", // 노출 이미지이미지
                        "url": "https://www.appbox.kr", // 이동 URL
                        "browser": false, // true : 외부 브라우저, false : 내부 웹뷰
                    },
                    {
                        
                        "image": "https://pk4u.kr/doc/appbox/appbox_events01.jpg", // 노출 이미지
                        "url": "https://www.mobpa.co.kr", // 이동 URL
                        "browser": false, // true : 외부 브라우저, false : 내부 웹뷰
                    }
                ],
                "centerpopup": false    // true: 화면 가운데 띄움, false: 화면 하단 띄움
            };
            break;
        case 1161:
            appData = {
                  "imageUrl" : "https://pk4u.kr/doc/appbox/appbox_apple.jpg"
            };
            break;
        case 1165:
            appData = {
                "item": [
                    {
                        "imageUrl": "https://pk4u.kr/doc/appbox/appbox_intro0.jpg"
                    },
                    {
                        "imageUrl": "https://pk4u.kr/doc/appbox/appbox_intro1.jpg"
                    },
                    {
                        "imageUrl": "https://pk4u.kr/doc/appbox/appbox_intro2.jpg"
                    },
                    {
                        "imageUrl": "https://pk4u.kr/doc/appbox/appbox_intro3.jpg"
                    }
                ]
            };
            break;
        case 1170:
            break;
        case 1190:
            appData = {
                "returnFunc" : "locationReturn"
            };
            break;
        case 1180:
            appData = {
                  "type" : "TERM",     // DAY : 특정날짜만 받아오기, TERM : 언제부터 언제까지의 기간
                  "selcolor" : "#0000ff", // 선택된 날짜 칼라
                  "returnFunc" : "calendarReturn"
            };
            break;
        case 2000:
            appData = {
                  "type" : "TODAY",       // TODAY: 오늘 총걸음, WEEK: 주간 일별 걸음수, MONTH: 월간 일별걸음수
                  "returnFunc" : "stepReturn"
            };
            break;
        case 1000:
            appData = {
                  "returnFunc" : "pushTokenReturn"
            };
            break;
        case 1001:
            appData = {
                   "title" : "포인트 알림",           
                   "message" : "고객님의 풍선포인트가 1,000포인트 적립되었습니다. ",   
                   "targetUrl" : "https://www.mobpa.co.kr", 
                   "returnFunc": "localPushReturn"
            };
            break;
        case 2100:
            appData = {
                  "target" : "http://www.appbox.kr",
                  "json" : {json},
                  "returnFunc" : "apiCallReturn"
            };
            break;


    }

    return appData
}
