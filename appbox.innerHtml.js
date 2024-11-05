
function callAppBoxHelp(jobCode) {
    console.log("function callAppBoxHelp(jobCode)");

    const mobileType = navigator.userAgent.toLowerCase();
    var userAgent = window.navigator.userAgent.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent );


    var message = {
                'code': jobCode
    }

    if (ios) {
        window.webkit.messageHandlers.appFuncHelp.postMessage(message);
    } else if(mobileType.indexOf('android') > -1 ) {
        window.androidCallAppBox.appFuncHelp(JSON.stringify(message));
    } else {
        alert(JSON.stringify(message));
    };


} 


// 시스템용 함수

function sysAppBox(jobCode, appData) {
    console.log("function sysAppSuite(jobCode, appData)");

    const mobileType = navigator.userAgent.toLowerCase();
    var userAgent = window.navigator.userAgent.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent );

    var message = {
                'code': jobCode,
                'param': appData
    }

    if (ios) {
        window.webkit.messageHandlers.sysFunc.postMessage(message);
    } else if(mobileType.indexOf('android') > -1 ) {
        window.androidCallAppBox.sysFunc(JSON.stringify(message));
    } else {
        alert(JSON.stringify(message));
    };
}



// 샘플앱용 함수

function sampleAppBox(sdata){
    // 문제를 찾아야 함
    // 제거해야할 대상과
    
    // 필터링 해야할 대상

    if(sdata.range > 3){
        setTimeout(pg(sdata), 1000);
    }

    srp();
    srp()
    // samCreateBtInDivs();
    // samCreateBtInTrs();
    // samCreateBtInPs();

    var total_list = []

    samCreateBt_total();

    //리스트를 체크 하려면
    // 만든 박스들을 관리하기 위한 리스트 변수가 필요함
    // 그 다음에 제거 할 수 있도록



    //좌표를 구한다?

}

function pg(sdata){
    var test_div_list = []; 

    test_div_list = srtp(sdata);

    test_div_list = scbid(test_div_list);

    console.log(`pgcompt`);
}

function fd(){

}

function srtp(sdata){

    //전체 태그 가져오기
    let nodeList = sdata.nodes;

    var countNum = 0;
    for(var i = 0; i < nodeList.length; i += 1) {
        // 앱솔루트 확인해서 삭제

        if(window.getComputedStyle(nodeList[i]).display == 'flex'){
            // nodeList[i].style.display = 'none';
            nodeList[i].style.display = 'block';
            // nodeList[i].remove();
        }

        if(window.getComputedStyle(nodeList[i]).position == 'absolute'){
            countNum += 1;
            //nodeList[i].style.display = 'none';
            nodeList[i].style.position = 'static';
        }

        else if(nodeList[i].style.position == 'absolute' || nodeList[i].style.position == 'relative'){
            countNum += 1;
            //nodeList[i].style.display = 'none';
            // nodeList[i].style.position = 'static';
            nodeList[i].remove();
        }

        else if(nodeList[i].style.position == 'relative'){
            countNum += 1;
            //nodeList[i].style.display = 'none';
            // nodeList[i].style.position = 'static';
            nodeList[i].remove();
        }

        else if(window.getComputedStyle(nodeList[i]).bottom == '0px'){
            nodeList[i].remove();
        }        
    
    }

    return nodeList;
}

//dum
function scbid(sdata){
    let divs = document.querySelectorAll('div');
    console.log(`${divs.length}`);

    // 버튼 및 박스 간격 정의
    let offsetHeight = 0;
    let divOffset = 2;

    // 스크린 너비 가져오기
    var screenWidth = window.innerWidth;
    console.log(`screenWidth : ${screenWidth}`);

    
    let totalBtNum = 20;
    let limitEachDivBtNum = 15;
    let bigBoxTiming = 7;

    var createCnt = 0;
    var i = (divs.length < 50) ? 1 : 20;
    
    var div_filtered_Map = new Map();
    
    for(; i < divs.length && createCnt < totalBtNum; i += 1) {
        var div_computedStyle = window.getComputedStyle(divs[i]);
        var div_width = Number(div_computedStyle.width.replace('px',''));
        var div_height = Number(div_computedStyle.height.replace('px',''));

        if(div_computedStyle.position != 'fixed' && div_computedStyle.display != 'flex' && div_width > (screenWidth * 0.6) && div_computedStyle.bottom == '0px'){
            div_filtered_Map.set(divs[i].getBoundingClientRect().top, divs[i]);
        }
    }

    // 높이 정렬
    const divMapToArray = [...div_filtered_Map];
    divMapToArray.sort((a, b) => a[0] - b[0]);
    
    // Velues 값만 리스트로 변환
    const divSortedMap = new Map(divMapToArray);
    var div_filter_list = Array.from(divSortedMap.values());


    // 뷰포트 높이와 적정 높이 
    let viewPortHeight = window.innerHeight;
    let goodStartHeight = (window.innerHeight) * (0.3)

    var checkNum = 0;
    var lastIdx = 0;

    var successBtnCreate = false;
    var madeBigBox = false;

    // make box

    for(i = 0; i < div_filter_list.length; i += divOffset) {
        let div_yPos = div_filter_list[i].getBoundingClientRect().top;

        if(!successBtnCreate && div_yPos > window.innerHeight){
            //적정 높이의 div 가 없을 경우
            console.log(`적정높이 없음`);
            div_computedStyle = window.getComputedStyle(div_filter_list[0]);
            div_width = Number(div_computedStyle.width.replace('px',''));
            div_height = Number(div_computedStyle.height.replace('px',''));
    
            div_filter_list[0].appendChild(document.createElement('br'));
            div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
    
            //버튼 집합을 표시
            div_filter_list[0].style.height = (div_height + 300) + 'px';
            div_filter_list[0].style.display = 'inline';
            div_filter_list[0].style.overflow = 'visible';
            
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';

            if(!madeBigBox){
                newDiv.className = 'mobpa_box2';

                madeBigBox = true;

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);
                createCnt++;

                div_filter_list[0].appendChild(newDiv);
                div_filter_list[0].appendChild(document.createElement('br'));
            
                document.body.insertBefore(newDiv, document.body.firstChild);
                div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);

                newDiv = document.createElement('div');
            }

            if(createCnt < limitEachDivBtNum){
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                div_filter_list[i].style.display = 'inline';
                div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                samCreateBt(newDiv, 0, 'div ' + (i + 1) + `/${divs.length}`);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
            }

            if(((createCnt + 1) > limitEachDivBtNum) || ((i + divOffset) >= div_filter_list.length)){
                newDiv.className = 'mobpa_box2';

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

                //div_filter_list[0].appendChild(newDiv);
                //div_filter_list[0].appendChild(document.createElement('br'));
            
                document.body.insertBefore(newDiv, document.body.firstChild);
                //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
                // break;
            }
            
        }
        else if(successBtnCreate || div_yPos > goodStartHeight){
            //적정의 높이를 찾아서 (첫번째) 버튼 추가
            console.log(`적정높이 찾음`);
            successBtnCreate = true;
            
            //console.log(`create button`);
            
            lastIdx = i;
            //div_filter_list[i].appendChild(document.createElement('br'));
            // div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
    
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
    
            if(createCnt < limitEachDivBtNum){
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                samCreateBt(newDiv, 0, 'div ' + (i + 1) + `/${divs.length}`);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
            }

            //div 갯수 제한을 만난 경우
            if(!madeBigBox && (((createCnt + 1) >= bigBoxTiming) || ((i + divOffset) >= div_filter_list.length))){
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                madeBigBox = true;

                div_filter_list[i].style.height = (div_height + 320) + 'px'
                div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box2';
                //newDiv.style.height = '300px'

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

                createCnt++;

                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
    
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
                // break;
            }

            div_filter_list[i].appendChild(newDiv);
            div_filter_list[i].appendChild(document.createElement('br'));
    
            div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
            div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
            
        }

    }
}


function srp(){
    //tr 갯수 가져오기
    let trs = document.querySelectorAll('tr');

    // 스크린 너비 가져오기
    var screenWidth = window.innerWidth;
    console.log(`screenWidth : ${screenWidth}`);

    let totalBtNum = 10;

    var createCnt = 0;


    //p 갯수 가져오기
    let ps = document.querySelectorAll('p');

    let limitEachPBtNum = 5;
    let pOffset = 3;

    createCnt = 0;
    
    
    // 버튼 생성 루프
    var p_filter_list = [];

    for(i = 0; i < ps.length && createCnt < totalBtNum; i += 1) {
        // 현재 p 상태 확인
        var p_computedStyle = window.getComputedStyle(ps[i]);
        var p_width = Number(p_computedStyle.width.replace('px',''));
        var p_height = Number(p_computedStyle.height.replace('px',''));
        //console.log(`Check div(${i}) Width : ${div_width}`);
    
        if(p_width > (screenWidth * 0.6)){
            p_filter_list.push(ps[i]);
        }
    
    }

    //p 아랫 부분에 div 끼워 넣기
    for(i = 1; i < p_filter_list.length; i += pOffset) {
        console.log(`p 다음에 div 넣기`);

        
        if(createCnt < limitEachPBtNum){
            var newDiv = document.createElement('div');

            newDiv.style.height = '100px'
            newDiv.className = 'mobpa_box1';

            samCreateBt(newDiv, 0, 'p ' + (i + 1) + `/${ps.length}`);

            createCnt++;

            p_filter_list[i].parentNode.insertBefore(newDiv, p_filter_list[i].nextSibling);

        }

    }
}

// var screenWidth = 0;

function sabi(){
    scbf();
}

function sabi(data){
    scbf(data);
}

function scbf(){
    // 공통 초기화 --
    // 스크린 너비 가져오기
    var screenWidth = window.innerWidth;
    console.log(`screenWidth2 : ${screenWidth}`);

    // created box 관리 리스트
    var createdBoxList = [];
    //--


    //div 갯수 가져오기
    let divs = document.querySelectorAll('div');
    console.log(`${divs.length}`);

    // 버튼 및 박스 간격 정의
    let offsetHeight = 200;
    let divOffset = 1;

    

    
    let totalBtNum = 30;
    let limitEachDivBtNum = 100;
    let bigBoxTiming = 7;

    var createCnt = 0;
    // var i = (divs.length < 50) ? 1 : 20;
    var i = 0;
    
    // 버튼 생성 루프
    var div_filtered_Map = new Map();

    var div_fitering_lastTop = 0;
    
    // 너비 필터링
    for(; i < divs.length; i += 1) {
        // 현재 div 상태 확인
        var div_computedStyle = window.getComputedStyle(divs[i]);
        var div_width = Number(div_computedStyle.width.replace('px',''));
        var div_height = Number(div_computedStyle.height.replace('px',''));
        var div_top = divs[i].getBoundingClientRect().top;
        
        //console.log(`Check div(${i}) Width : ${div_width}`);

        if(div_computedStyle.position != 'fixed' 
            // && div_computedStyle.display != 'flex' 
            && div_width > (screenWidth * 0.6) 
            && div_computedStyle.bottom != '0px'
            && div_top > 0
            && (divs[i].className).indexOf('bottom') == -1
            && (divs[i].className).indexOf('naviga') == -1
            && (divs[i].className).indexOf('foot') == -1
            // && div_computedStyle.position != 'absolute'
            ){

            div_filtered_Map.set(div_top, divs[i]);
        }
    }

    // 높이 정렬
    const divMapToArray = [...div_filtered_Map];
    divMapToArray.sort((a, b) => a[0] - b[0]);
    
    // Velues 값만 리스트로 변환
    const divSortedMap = new Map(divMapToArray);
    var div_filter_list = Array.from(divSortedMap.values());


    // 뷰포트 높이와 적정 높이 
    let viewPortHeight = window.innerHeight;
    let goodStartHeight = (window.innerHeight) * (0.3)

    var checkNum = 0;
    var lastIdx = 0;

    var successBtnCreate = false;
    var madeBigBox = false;

    // make box

    for(i = 0; i < div_filter_list.length; i += divOffset) {
        // div에 대한 y 위치 가져오기
        let div_yPos = div_filter_list[i].getBoundingClientRect().top;

        if(!successBtnCreate && div_yPos > window.innerHeight){
            //적정 높이의 div 가 없을 경우
            console.log(`적정높이 없음`);
            div_computedStyle = window.getComputedStyle(div_filter_list[0]);
            div_width = Number(div_computedStyle.width.replace('px',''));
            div_height = Number(div_computedStyle.height.replace('px',''));
    
            //div_filter_list[0].appendChild(document.createElement('br'));
            //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
    
            //버튼 집합을 표시
            //div_filter_list[0].style.height = (div_height + 300) + 'px';
            //div_filter_list[0].style.display = 'inline';
            //div_filter_list[0].style.overflow = 'visible';
            
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';

            if(!madeBigBox){
                newDiv.className = 'mobpa_box2';

                madeBigBox = true;

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);
                createCnt++;

                //div_filter_list[0].appendChild(newDiv);
                //div_filter_list[0].appendChild(document.createElement('br'));
            
                document.body.insertBefore(newDiv, document.body.firstChild);
                //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
                // break;

                newDiv = document.createElement('div');
            }

            if( (createCnt < limitEachDivBtNum)
            && (div_fitering_lastTop == 0 || div_filter_list[i].getBoundingClientRect().top - div_fitering_lastTop > offsetHeight) )
            {
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                // div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                samCreateBt(newDiv, 0, 'div ' + (i + 1) + `/${divs.length}`);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                createdBoxList.push(newDiv);
                div_fitering_lastTop = div_filter_list[i].getBoundingClientRect().top
            }

            // if(((createCnt + 1) > limitEachDivBtNum) || ((i + divOffset) >= div_filter_list.length)){
            //     newDiv.className = 'mobpa_box2';

            //     // 여기서 버튼 루프 돌리고 박ㅅ
            //     samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

            //     //div_filter_list[0].appendChild(newDiv);
            //     //div_filter_list[0].appendChild(document.createElement('br'));
            
            //     document.body.insertBefore(newDiv, document.body.firstChild);
            //     //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
            //     // break;
            // }
            
        }
        else if(successBtnCreate || div_yPos > goodStartHeight){
            //적정의 높이를 찾아서 (첫번째) 버튼 추가
            console.log(`적정높이 찾음`);
            successBtnCreate = true;

            div_computedStyle = window.getComputedStyle(div_filter_list[i]);
            div_width = Number(div_computedStyle.width.replace('px',''));
            div_height = Number(div_computedStyle.height.replace('px',''));
            console.log(`Check height (${i}) : ${div_height}`);
            
            //console.log(`create button`);
            
            lastIdx = i;
            //div_filter_list[i].appendChild(document.createElement('br'));
            // div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
    
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
    
            if( (createCnt < limitEachDivBtNum) 
                && (div_fitering_lastTop == 0 || div_filter_list[i].getBoundingClientRect().top - div_fitering_lastTop > offsetHeight) )
            {
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                // div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                samCreateBt(newDiv, 0, 'div ' + (i + 1) + `/${divs.length}`);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                createdBoxList.push(newDiv);
                div_fitering_lastTop = div_filter_list[i].getBoundingClientRect().top
            }

            //div 갯수 제한을 만난 경우
            if(!madeBigBox && (((createCnt + 1) >= bigBoxTiming) || ((i + divOffset) >= div_filter_list.length))){
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                madeBigBox = true;

                div_filter_list[i].style.height = (div_height + 320) + 'px'
                // div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box2';
                //newDiv.style.height = '300px'

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

                createCnt++;

                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
    
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
                // break;

                createdBoxList.push(newDiv);
                div_fitering_lastTop = div_filter_list[i].getBoundingClientRect().top
            }

            //div_filter_list[i].appendChild(newDiv);
            //div_filter_list[i].appendChild(document.createElement('br'));
    
            // div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
            // div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
            
        }

    }

    if(div_filter_list.length == 0){
        //적정 높이의 div 가 없을 경우
            console.log(`리스트 없음`);
        
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';

            if(!madeBigBox){
                newDiv.className = 'mobpa_box2';

                madeBigBox = true;

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);
                createCnt++;

                //div_filter_list[0].appendChild(newDiv);
                //div_filter_list[0].appendChild(document.createElement('br'));
            
                document.body.insertBefore(newDiv, document.body.firstChild);
                //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
                // break;

                newDiv = document.createElement('div');
            }
    }

    // make end


    // Check and remove

    i = 0;
    for(; i < createdBoxList.length; i++){
        var targetRect = createdBoxList[i].getBoundingClientRect();

        if(createdBoxList[i].getBoundingClientRect().left < -10 
            || createdBoxList[i].getBoundingClientRect().right > (screenWidth + 10)
            || createdBoxList[i].getBoundingClientRect().width < (screenWidth * 0.6)){
            

            // 왼쪽이 0보다 작거나
            // 오른쪽이 스크린 너비보다 크거나
            // 넓이가 스크린 너비보다 크거나
            // 넓이가 너무 작거나

            //해당 노드 제거?
            console.log(`Check Remove Target : ${i} (l/r/w) :: ${createdBoxList[i].getBoundingClientRect().left}/${createdBoxList[i].getBoundingClientRect().right}/${createdBoxList[i].getBoundingClientRect().width}`);
            createdBoxList[i].remove();

        }
    }

    return createdBoxList;
}

function scbf(data){

    var linkList = samCollectionLinks()

    // 공통 초기화 --
    // 스크린 너비 가져오기
    var screenWidth = window.innerWidth;
    console.log(`screenWidth : ${screenWidth}`);

    // created box 관리 리스트
    var createdBoxList = [];
    //--


    //div 갯수 가져오기
    let divs = document.querySelectorAll('div');
    console.log(`${divs.length}`);

    // 버튼 및 박스 간격 정의
    let offsetHeight = 200;
    let divOffset = 1;

    

    
    let totalBtNum = data.length;
    let limitEachDivBtNum = data.length;
    let bigBoxTiming = 10000;

    var createCnt = 0;
    // var i = (divs.length < 50) ? 1 : 20;
    var i = 0;
    
    // 버튼 생성 루프
    var div_filtered_Map = new Map();

    var div_fitering_lastTop = 0;
    
    // 너비 필터링
    for(; i < divs.length; i += 1) {
        // 현재 div 상태 확인
        var div_computedStyle = window.getComputedStyle(divs[i]);
        var div_width = Number(div_computedStyle.width.replace('px',''));
        var div_height = Number(div_computedStyle.height.replace('px',''));
        var div_top = divs[i].getBoundingClientRect().top;
        
        //console.log(`Check div(${i}) Width : ${div_width}`);

        if(div_computedStyle.position != 'fixed' 
            // && div_computedStyle.display != 'flex' 
            && div_width > (screenWidth * 0.6) 
            && div_computedStyle.bottom != '0px'
            && div_top > 0
            && (divs[i].className).indexOf('bottom') == -1
            && (divs[i].className).indexOf('naviga') == -1
            && (divs[i].className).indexOf('foot') == -1
            // && div_computedStyle.position != 'absolute'
            ){

            div_filtered_Map.set(div_top, divs[i]);
        }
    }

    // 높이 정렬
    const divMapToArray = [...div_filtered_Map];
    divMapToArray.sort((a, b) => a[0] - b[0]);
    
    // Velues 값만 리스트로 변환
    const divSortedMap = new Map(divMapToArray);
    var div_filter_list = Array.from(divSortedMap.values());


    // 뷰포트 높이와 적정 높이 
    let viewPortHeight = window.innerHeight;
    let goodStartHeight = (window.innerHeight) * (0.3)

    var checkNum = 0;
    var lastIdx = 0;

    var successBtnCreate = false;
    var madeBigBox = false;

    // make box

    for(i = 0; i < div_filter_list.length; i += divOffset) {
        // div에 대한 y 위치 가져오기
        let div_yPos = div_filter_list[i].getBoundingClientRect().top;

        if(!successBtnCreate && div_yPos > window.innerHeight){
            //적정 높이의 div 가 없을 경우
            console.log(`적정높이 없음`);
            div_computedStyle = window.getComputedStyle(div_filter_list[0]);
            div_width = Number(div_computedStyle.width.replace('px',''));
            div_height = Number(div_computedStyle.height.replace('px',''));
    
            //div_filter_list[0].appendChild(document.createElement('br'));
            //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
    
            //버튼 집합을 표시
            //div_filter_list[0].style.height = (div_height + 300) + 'px';
            //div_filter_list[0].style.display = 'inline';
            //div_filter_list[0].style.overflow = 'visible';
            
            if(createCnt == 0){
                if(data.length >= 3){
                    var newDiv = document.createElement('div');
                    newDiv.style.maxWidth = (screenWidth) + 'px';
                    newDiv.style.display = "flex";
                    newDiv.style.alignItems = "center";
                    newDiv.style.justifyContent = "space-between";
                    newDiv.className = 'mobpa_box1';

                    samCreateBt_Test(newDiv, data[2].code, data[2].name, createCnt, data.length);

                    document.body.insertBefore(document.createElement('br'), document.body.firstChild);
                    document.body.insertBefore(newDiv, document.body.firstChild);

                    createdBoxList.push(newDiv);
                    ++createCnt;
                }

                if(data.length >= 2){
                    var newDiv = document.createElement('div');
                    newDiv.style.maxWidth = (screenWidth) + 'px';
                    newDiv.style.display = "flex";
                    newDiv.style.alignItems = "center";
                    newDiv.style.justifyContent = "space-between";
                    newDiv.className = 'mobpa_box1';

                    samCreateBt_Test(newDiv, data[1].code, data[1].name, createCnt, data.length);

                    document.body.insertBefore(document.createElement('br'), document.body.firstChild);
                    document.body.insertBefore(newDiv, document.body.firstChild);

                    createdBoxList.push(newDiv);
                    ++createCnt;
                }

                if(data.length >= 1){
                    var newDiv = document.createElement('div');
                    newDiv.style.maxWidth = (screenWidth) + 'px';
                    newDiv.style.display = "flex";
                    newDiv.style.alignItems = "center";
                    newDiv.style.justifyContent = "space-between";
                    newDiv.className = 'mobpa_box1';

                    samCreateBt_Test(newDiv, data[0].code, data[0].name, createCnt, data.length);

                    document.body.insertBefore(document.createElement('br'), document.body.firstChild);
                    document.body.insertBefore(newDiv, document.body.firstChild);

                    createdBoxList.push(newDiv);
                    ++createCnt;
                }
            }
            

            
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
            newDiv.style.display = "flex";
            newDiv.style.alignItems = "center";
            newDiv.style.justifyContent = "space-between";

            if( (div_fitering_lastTop == 0 || div_filter_list[i].getBoundingClientRect().top - div_fitering_lastTop > offsetHeight) )
            {
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                // div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'hidden';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                // samCreateBt(newDiv, 0, data[createCnt].name + '(div ' + (i + 1) + `/${divs.length})`);

                var indexNum = createCnt%data.length

                samCreateBt_Test(newDiv, data[indexNum].code, data[indexNum].name, createCnt, data.length);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                createdBoxList.push(newDiv);
                div_fitering_lastTop = div_filter_list[i].getBoundingClientRect().top
            }

            // if(((createCnt + 1) > limitEachDivBtNum) || ((i + divOffset) >= div_filter_list.length)){
            //     newDiv.className = 'mobpa_box2';

            //     // 여기서 버튼 루프 돌리고 박ㅅ
            //     samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

            //     //div_filter_list[0].appendChild(newDiv);
            //     //div_filter_list[0].appendChild(document.createElement('br'));
            
            //     document.body.insertBefore(newDiv, document.body.firstChild);
            //     //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
            //     // break;
            // }
            
        }
        else if(successBtnCreate || div_yPos > goodStartHeight){
            //적정의 높이를 찾아서 (첫번째) 버튼 추가
            console.log(`적정높이 찾음`);
            successBtnCreate = true;

            div_computedStyle = window.getComputedStyle(div_filter_list[i]);
            div_width = Number(div_computedStyle.width.replace('px',''));
            div_height = Number(div_computedStyle.height.replace('px',''));
            console.log(`Check height (${i}) : ${div_height}`);
            
            //console.log(`create button`);
            
            lastIdx = i;
            //div_filter_list[i].appendChild(document.createElement('br'));
            // div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
    

            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
            newDiv.style.display = "flex";
            newDiv.style.alignItems = "center";
            newDiv.style.justifyContent = "space-between";


            if( (div_fitering_lastTop == 0 || div_filter_list[i].getBoundingClientRect().top - div_fitering_lastTop > offsetHeight) )
            {
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                // div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'hidden';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                // samCreateBt(newDiv, data[createCnt].code, data[createCnt].name + '(div ' + (i + 1) + `/${divs.length})`);

                var indexNum = createCnt%data.length

                samCreateBt_Test(newDiv, data[indexNum].code, data[indexNum].name, createCnt, data.length);



                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                createdBoxList.push(newDiv);
                div_fitering_lastTop = div_filter_list[i].getBoundingClientRect().top
            }

        }

    }

    if(div_filter_list.length == 0){
        //적정 높이의 div 가 없을 경우
        console.log(`리스트 없음`);
    
        

        if(data.length >= 3){
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
            newDiv.style.display = "flex";
            newDiv.style.alignItems = "center";
            newDiv.style.justifyContent = "space-between";
            newDiv.className = 'mobpa_box1';

            samCreateBt_Test(newDiv, data[2].code, data[2].name, createCnt, data.length);

            document.body.insertBefore(document.createElement('br'), document.body.firstChild);
            document.body.insertBefore(newDiv, document.body.firstChild);

            createdBoxList.push(newDiv);
            createCnt++;
        }

        if(data.length >= 2){
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
            newDiv.style.display = "flex";
            newDiv.style.alignItems = "center";
            newDiv.style.justifyContent = "space-between";
            newDiv.className = 'mobpa_box1';

            samCreateBt_Test(newDiv, data[1].code, data[1].name, createCnt, data.length);

            document.body.insertBefore(document.createElement('br'), document.body.firstChild);
            document.body.insertBefore(newDiv, document.body.firstChild);

            createdBoxList.push(newDiv);
            createCnt++;
        }

        if(data.length >= 1){
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
            newDiv.style.display = "flex";
            newDiv.style.alignItems = "center";
            newDiv.style.justifyContent = "space-between";
            newDiv.className = 'mobpa_box1';

            samCreateBt_Test(newDiv, data[0].code, data[0].name, createCnt, data.length);

            document.body.insertBefore(document.createElement('br'), document.body.firstChild);
            document.body.insertBefore(newDiv, document.body.firstChild);

            createdBoxList.push(newDiv);
            createCnt++;
        }
    }

    // 조건을 생성 개수가 리스트 개수보다 큰지
    // 작다면 생성

    if(createCnt < data.length){
        for(var i = createCnt; i < data.length; ++i){
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
            newDiv.style.display = "flex";
            newDiv.style.alignItems = "center";
            newDiv.style.justifyContent = "space-between";
            newDiv.className = 'mobpa_box1';

            samCreateBt_Test(newDiv, data[i].code, data[i].name, createCnt, data.length);

            document.body.appendChild(document.createElement('br'));
            document.body.appendChild(newDiv);

            createdBoxList.push(newDiv);
        }
    }

    // make end


    // Check and remove

    i = 0;
    for(; i < createdBoxList.length; i++){
        var targetRect = createdBoxList[i].getBoundingClientRect();

        if(createdBoxList[i].getBoundingClientRect().left < -10 
            || createdBoxList[i].getBoundingClientRect().right > (screenWidth + 10)
            || createdBoxList[i].getBoundingClientRect().width < (screenWidth * 0.6)){
            

            // 왼쪽이 0보다 작거나
            // 오른쪽이 스크린 너비보다 크거나
            // 넓이가 스크린 너비보다 크거나
            // 넓이가 너무 작거나

            //해당 노드 제거?
            console.log(`Check Remove Target : ${i} (l/r/w) :: ${createdBoxList[i].getBoundingClientRect().left}/${createdBoxList[i].getBoundingClientRect().right}/${createdBoxList[i].getBoundingClientRect().width}`);
            createdBoxList[i].remove();

        }
    }

    return createdBoxList;
}

function scbs(){
    scbf2([])
}

function sfd(){
    var arr = [];


}

function scbf2(data){
    // 공통 초기화 --
    // 스크린 너비 가져오기
    var screenWidth = window.innerWidth;
    console.log(`screenWidth : ${screenWidth}`);

    // created box 관리 리스트
    var createdBoxList = [];
    //--


    //div 갯수 가져오기
    let divs = document.querySelectorAll('div');
    console.log(`${divs.length}`);

    // 버튼 및 박스 간격 정의
    let offsetHeight = 200;
    let divOffset = 1;

    

    
    let totalBtNum = data.length;
    let limitEachDivBtNum = data.length;
    let bigBoxTiming = 10000;

    var createCnt = 0;
    // var i = (divs.length < 50) ? 1 : 20;
    var i = 0;
    
    // 버튼 생성 루프
    var div_filtered_Map = new Map();

    var div_fitering_lastTop = 0;
    
    // 너비 필터링
    for(; i < divs.length; i += 1) {
        // 현재 div 상태 확인
        var div_computedStyle = window.getComputedStyle(divs[i]);
        var div_width = Number(div_computedStyle.width.replace('px',''));
        var div_height = Number(div_computedStyle.height.replace('px',''));
        var div_top = divs[i].getBoundingClientRect().top;
        
        //console.log(`Check div(${i}) Width : ${div_width}`);

        if(div_computedStyle.position != 'fixed' 
            // && div_computedStyle.display != 'flex' 
            && div_width > (screenWidth * 0.6) 
            && div_computedStyle.bottom != '0px'
            && div_top > 0
            && (divs[i].className).indexOf('bottom') == -1
            && (divs[i].className).indexOf('naviga') == -1
            && (divs[i].className).indexOf('foot') == -1
            // && div_computedStyle.position != 'absolute'
            ){

            div_filtered_Map.set(div_top, divs[i]);
        }
    }

    // 높이 정렬
    const divMapToArray = [...div_filtered_Map];
    divMapToArray.sort((a, b) => a[0] - b[0]);
    
    // Velues 값만 리스트로 변환
    const divSortedMap = new Map(divMapToArray);
    var div_filter_list = Array.from(divSortedMap.values());


    // 뷰포트 높이와 적정 높이 
    let viewPortHeight = window.innerHeight;
    let goodStartHeight = (window.innerHeight) * (0.3)

    var checkNum = 0;
    var lastIdx = 0;

    var successBtnCreate = false;
    var madeBigBox = false;

    // make box

    for(i = 0; i < div_filter_list.length; i += divOffset) {
        // div에 대한 y 위치 가져오기
        let div_yPos = div_filter_list[i].getBoundingClientRect().top;

        if(!successBtnCreate && div_yPos > window.innerHeight){
            //적정 높이의 div 가 없을 경우
            console.log(`적정높이 없음`);
            div_computedStyle = window.getComputedStyle(div_filter_list[0]);
            div_width = Number(div_computedStyle.width.replace('px',''));
            div_height = Number(div_computedStyle.height.replace('px',''));
    
            //div_filter_list[0].appendChild(document.createElement('br'));
            //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
    
            //버튼 집합을 표시
            //div_filter_list[0].style.height = (div_height + 300) + 'px';
            //div_filter_list[0].style.display = 'inline';
            //div_filter_list[0].style.overflow = 'visible';
            
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';

            if(!madeBigBox){
                newDiv.className = 'mobpa_box2';

                madeBigBox = true;

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);
                createCnt++;

                //div_filter_list[0].appendChild(newDiv);
                //div_filter_list[0].appendChild(document.createElement('br'));
            
                document.body.insertBefore(newDiv, document.body.firstChild);
                //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
                // break;

                newDiv = document.createElement('div');
            }

            if( (createCnt < limitEachDivBtNum)
            && (div_fitering_lastTop == 0 || div_filter_list[i].getBoundingClientRect().top - div_fitering_lastTop > offsetHeight) )
            {
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                // div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'hidden';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                samCreateBt(newDiv, 0, data[createCnt].name + '(div ' + (i + 1) + `/${divs.length})`);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                createdBoxList.push(newDiv);
                div_fitering_lastTop = div_filter_list[i].getBoundingClientRect().top
            }

            // if(((createCnt + 1) > limitEachDivBtNum) || ((i + divOffset) >= div_filter_list.length)){
            //     newDiv.className = 'mobpa_box2';

            //     // 여기서 버튼 루프 돌리고 박ㅅ
            //     samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

            //     //div_filter_list[0].appendChild(newDiv);
            //     //div_filter_list[0].appendChild(document.createElement('br'));
            
            //     document.body.insertBefore(newDiv, document.body.firstChild);
            //     //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
            //     // break;
            // }
            
        }
        else if(successBtnCreate || div_yPos > goodStartHeight){
            //적정의 높이를 찾아서 (첫번째) 버튼 추가
            console.log(`적정높이 찾음`);
            successBtnCreate = true;

            div_computedStyle = window.getComputedStyle(div_filter_list[i]);
            div_width = Number(div_computedStyle.width.replace('px',''));
            div_height = Number(div_computedStyle.height.replace('px',''));
            console.log(`Check height (${i}) : ${div_height}`);
            
            //console.log(`create button`);
            
            lastIdx = i;
            //div_filter_list[i].appendChild(document.createElement('br'));
            // div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
    

            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';

            if( (createCnt < limitEachDivBtNum) 
                && (div_fitering_lastTop == 0 || div_filter_list[i].getBoundingClientRect().top - div_fitering_lastTop > offsetHeight) )
            {
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                // div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'hidden';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                samCreateBt(newDiv, data[createCnt].code, data[createCnt].name + '(div ' + (i + 1) + `/${divs.length})`);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                createdBoxList.push(newDiv);
                div_fitering_lastTop = div_filter_list[i].getBoundingClientRect().top
            }

            //div 갯수 제한을 만난 경우
            if(!madeBigBox && (((createCnt + 1) >= bigBoxTiming) || ((i + divOffset) >= div_filter_list.length))){
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                madeBigBox = true;

                div_filter_list[i].style.height = (div_height + 320) + 'px'
                // div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'hidden';
                newDiv.className = 'mobpa_box2';
                //newDiv.style.height = '300px'

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

                createCnt++;

                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
    
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
                // break;

                createdBoxList.push(newDiv);
                div_fitering_lastTop = div_filter_list[i].getBoundingClientRect().top
            }

            //div_filter_list[i].appendChild(newDiv);
            //div_filter_list[i].appendChild(document.createElement('br'));
    
            // div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
            // div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
            
        }

    }

    if(div_filter_list.length == 0){
        //적정 높이의 div 가 없을 경우
            console.log(`리스트 없음`);
        
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';

            if(!madeBigBox){
                newDiv.className = 'mobpa_box2';

                madeBigBox = true;

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);
                createCnt++;

                //div_filter_list[0].appendChild(newDiv);
                //div_filter_list[0].appendChild(document.createElement('br'));
            
                document.body.insertBefore(newDiv, document.body.firstChild);
                //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
                // break;

                newDiv = document.createElement('div');
            }
    }

    // make end


    // Check and remove

    i = 0;
    for(; i < createdBoxList.length; i++){
        var targetRect = createdBoxList[i].getBoundingClientRect();

        if(createdBoxList[i].getBoundingClientRect().left < -10 
            || createdBoxList[i].getBoundingClientRect().right > (screenWidth + 10)
            || createdBoxList[i].getBoundingClientRect().width < (screenWidth * 0.6)){
            

            // 왼쪽이 0보다 작거나
            // 오른쪽이 스크린 너비보다 크거나
            // 넓이가 스크린 너비보다 크거나
            // 넓이가 너무 작거나

            //해당 노드 제거?
            console.log(`Check Remove Target : ${i} (l/r/w) :: ${createdBoxList[i].getBoundingClientRect().left}/${createdBoxList[i].getBoundingClientRect().right}/${createdBoxList[i].getBoundingClientRect().width}`);
            createdBoxList[i].remove();

        }
    }

    return createdBoxList;
}


function scbt(){
    //div 갯수 가져오기
    let divs = document.querySelectorAll('div');
    console.log(`${divs.length}`);

    // 버튼 및 박스 간격 정의
    let offsetHeight = 0;
    let divOffset = 2;

    // 스크린 너비 가져오기
    var screenWidth = window.innerWidth;
    console.log(`screenWidth : ${screenWidth}`);

    
    let totalBtNum = 20;
    let limitEachDivBtNum = 15;
    let bigBoxTiming = 7;

    var createCnt = 0;
    // var i = (divs.length < 50) ? 1 : 20;
    var i = 0;
    
    // 버튼 생성 루프
    var div_filtered_Map = new Map();
    
    // 너비 필터링
    for(; i < divs.length && createCnt < totalBtNum; i += 1) {
        // 현재 div 상태 확인
        var div_computedStyle = window.getComputedStyle(divs[i]);
        var div_width = Number(div_computedStyle.width.replace('px',''));
        var div_height = Number(div_computedStyle.height.replace('px',''));
        //console.log(`Check div(${i}) Width : ${div_width}`);

        if(div_computedStyle.position != 'fixed' && div_computedStyle.display != 'flex' && div_width > (screenWidth * 0.6) && div_computedStyle.bottom == '0px'){
            div_filtered_Map.set(divs[i].getBoundingClientRect().top, divs[i]);
        }
    }

    // 높이 정렬
    const divMapToArray = [...div_filtered_Map];
    divMapToArray.sort((a, b) => a[0] - b[0]);
    
    // Velues 값만 리스트로 변환
    const divSortedMap = new Map(divMapToArray);
    var div_filter_list = Array.from(divSortedMap.values());


    // 뷰포트 높이와 적정 높이 
    let viewPortHeight = window.innerHeight;
    let goodStartHeight = (window.innerHeight) * (0.3)

    var checkNum = 0;
    var lastIdx = 0;

    var successBtnCreate = false;
    var madeBigBox = false;

    // make box

    for(i = 0; i < div_filter_list.length; i += divOffset) {
        // div에 대한 y 위치 가져오기
        let div_yPos = div_filter_list[i].getBoundingClientRect().top;

        if(!successBtnCreate && div_yPos > window.innerHeight){
            //적정 높이의 div 가 없을 경우
            console.log(`적정높이 없음`);
            div_computedStyle = window.getComputedStyle(div_filter_list[0]);
            div_width = Number(div_computedStyle.width.replace('px',''));
            div_height = Number(div_computedStyle.height.replace('px',''));
            //console.log(`Check div(${i}) Width : ${div_width}`);
    
            //div_filter_list[0].appendChild(document.createElement('br'));
            //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
    
            //버튼 집합을 표시
            //div_filter_list[0].style.height = (div_height + 300) + 'px';
            //div_filter_list[0].style.display = 'inline';
            //div_filter_list[0].style.overflow = 'visible';
            
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';

            if(!madeBigBox){
                newDiv.className = 'mobpa_box2';

                madeBigBox = true;

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);
                createCnt++;

                //div_filter_list[0].appendChild(newDiv);
                //div_filter_list[0].appendChild(document.createElement('br'));
            
                document.body.insertBefore(newDiv, document.body.firstChild);
                //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
                // break;

                newDiv = document.createElement('div');
            }

            if(createCnt < limitEachDivBtNum){
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                samCreateBt(newDiv, 0, 'div ' + (i + 1) + `/${divs.length}`);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
            }

            // if(((createCnt + 1) > limitEachDivBtNum) || ((i + divOffset) >= div_filter_list.length)){
            //     newDiv.className = 'mobpa_box2';

            //     // 여기서 버튼 루프 돌리고 박ㅅ
            //     samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

            //     //div_filter_list[0].appendChild(newDiv);
            //     //div_filter_list[0].appendChild(document.createElement('br'));
            
            //     document.body.insertBefore(newDiv, document.body.firstChild);
            //     //div_filter_list[0].insertBefore(document.createElement('br'), div_filter_list[0].firstChild);
            //     // break;
            // }
            
        }
        else if(successBtnCreate || div_yPos > goodStartHeight){
            //적정의 높이를 찾아서 (첫번째) 버튼 추가
            console.log(`적정높이 찾음`);
            successBtnCreate = true;
            
            //console.log(`create button`);
            
            lastIdx = i;
            //div_filter_list[i].appendChild(document.createElement('br'));
            // div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
    
            var newDiv = document.createElement('div');
            newDiv.style.maxWidth = (screenWidth) + 'px';
    
            if(createCnt < limitEachDivBtNum){
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                div_filter_list[i].style.height = (div_height + 120) + 'px';
                div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box1';

                // 각 개별 버튼 생성
                // 여기 조건 loop?
                samCreateBt(newDiv, 0, 'div ' + (i + 1) + `/${divs.length}`);

                createCnt++;
                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
        
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
            }

            //div 갯수 제한을 만난 경우
            if(!madeBigBox && (((createCnt + 1) >= bigBoxTiming) || ((i + divOffset) >= div_filter_list.length))){
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);

                madeBigBox = true;

                div_filter_list[i].style.height = (div_height + 320) + 'px'
                div_filter_list[i].style.display = 'inline';
                // div_filter_list[i].style.cssText = 'display:inline !important';
                div_filter_list[i].style.overflow = 'scroll';
                newDiv.className = 'mobpa_box2';
                //newDiv.style.height = '300px'

                // 여기서 버튼 루프 돌리고 박ㅅ
                samCreateBtBox(newDiv, totalBtNum, createCnt, divs.length);

                createCnt++;

                //div_filter_list[i].appendChild(newDiv);
                //div_filter_list[i].appendChild(document.createElement('br'));
    
                div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
                div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
                // break;
            }

            //div_filter_list[i].appendChild(newDiv);
            //div_filter_list[i].appendChild(document.createElement('br'));
    
            // div_filter_list[i].insertBefore(newDiv, div_filter_list[i].firstChild);
            // div_filter_list[i].insertBefore(document.createElement('br'), div_filter_list[i].firstChild);
            
        }

    }



}


function samCreateBtInTrs(){

    //tr 갯수 가져오기
    let trs = document.querySelectorAll('tr');

    // 스크린 너비 가져오기
    var screenWidth = window.innerWidth;
    console.log(`screenWidth : ${screenWidth}`);

    let totalBtNum = 10;
    let limitEachTrBtNum = 5;
    let trOffset = 3;

    var createCnt = 0;

    // Tr 버튼 생성
    var tr_filter_list = [];
    
    var i = 0;

    for(; i < trs.length && createCnt < limitEachTrBtNum; i += 1) {
        // 현재 tr 상태 확인
        var tr_computedStyle = window.getComputedStyle(trs[i]);
        var tr_width = Number(tr_computedStyle.width.replace('px',''));
        var tr_height = Number(tr_computedStyle.height.replace('px',''));
        //console.log(`Check tr(${i}) Width : ${tr_width}`);
    
    //
        if(tr_width > (screenWidth * 0.6)){
            tr_filter_list.push(trs[i]);
        }
    
    }

    //TR 윗부분에 div? TR? 끼워 넣기
    for(i = 1; i < tr_filter_list.length; i += trOffset) {
        console.log(`TR 넣기`);

        
        if(createCnt < limitEachTrBtNum){
            var newTr = document.createElement('tr');

            newTr.style.height = '100px'
            newTr.className = 'mobpa_tr';

            samCreateBt(newTr, 0, 'tr ' + (i + 1) + `/${trs.length}`);

            createCnt++;

            tr_filter_list[i].parentNode.insertBefore(newTr, tr_filter_list[i]);

        }

    }

}


function samCreateBtInPs(){

    //tr 갯수 가져오기
    let trs = document.querySelectorAll('tr');

    // 스크린 너비 가져오기
    var screenWidth = window.innerWidth;
    console.log(`screenWidth : ${screenWidth}`);

    let totalBtNum = 10;

    var createCnt = 0;


    //p 갯수 가져오기
    let ps = document.querySelectorAll('p');

    let limitEachPBtNum = 5;
    let pOffset = 3;

    createCnt = 0;
    
    
    // 버튼 생성 루프
    var p_filter_list = [];

    for(i = 0; i < ps.length && createCnt < totalBtNum; i += 1) {
        // 현재 p 상태 확인
        var p_computedStyle = window.getComputedStyle(ps[i]);
        var p_width = Number(p_computedStyle.width.replace('px',''));
        var p_height = Number(p_computedStyle.height.replace('px',''));
        //console.log(`Check div(${i}) Width : ${div_width}`);
    
    //
        if(p_width > (screenWidth * 0.6)){
            p_filter_list.push(ps[i]);
        }
    
    }

    //p 아랫 부분에 div 끼워 넣기
    for(i = 1; i < p_filter_list.length; i += pOffset) {
        console.log(`p 다음에 div 넣기`);

        
        if(createCnt < limitEachPBtNum){
            var newDiv = document.createElement('div');

            newDiv.style.height = '100px'
            newDiv.className = 'mobpa_box1';

            samCreateBt(newDiv, 0, 'p ' + (i + 1) + `/${ps.length}`);

            createCnt++;

            p_filter_list[i].parentNode.insertBefore(newDiv, p_filter_list[i].nextSibling);

        }

    }


}


function samCreateBtBox(parentNode, totalBtNum, createdCnt, totalDivNum){
    for(i = 0; i < totalBtNum; i++){
        samCreateBt(parentNode, 0, 'div ' + (i + 1) + `/${totalDivNum}`);
    }
}

function samCreateBt(parentNode, code, btName){

    var testButton = document.createElement('button');
    testButton.className = 'mobpa_btn';
    testButton.innerHTML = btName;
    testButton.onclick = function() { };
    parentNode.appendChild(testButton);
    
    var testButton = document.createElement('button');
    testButton.className = 'mobpa_btn';
    testButton.innerHTML = btName;
    testButton.onclick = function() { };
    parentNode.appendChild(testButton);

}

function samCreateBt_Test(parentNode, code, btName, createCnt, length){

    var testImg = document.createElement('img');
    testImg.src = 'https://pk4u.kr/doc/appbox/abicon001.png'
    testImg.style.width = "30px"; // 원하는 크기로 설정
    testImg.style.height = "30px"; // 원하는 크기로 설정
    // testImg.style.objectFit = "cover"; // 이미지 크기 맞춤 조정
    parentNode.appendChild(testImg);
    
    var testButton = document.createElement('button');
    testButton.className = 'mobpa_btn';
    testButton.style.flexGrow = "1";

    testButton.innerHTML = btName;
    testButton.onclick = function() {callAppBox(code, getDemoData(code))};
    parentNode.appendChild(testButton);

    var infoButton = document.createElement('button');
    infoButton.className = 'mobpa_btn_info';
    infoButton.innerHTML = "!";
    infoButton.style.cssFloat = "right"
    infoButton.onclick = function() { callAppBoxHelp(code)};
    parentNode.appendChild(infoButton);

}


function samCollectionLinks(){
    //ul 태그 수집
    //0번째 a 태그의 href 체크 ()
    var menuNodes = document.querySelectorAll('nav');
    console.log(`navs 개수 : ${menuNodes.length}`);

    if(menuNodes.length == 0){
        menuNodes = document.querySelectorAll('ul');
        console.log(`ul 개수 : ${menuNodes.length}`);
    }

    var aList = [];
    for(const node of menuNodes) {
                // console.log(`node : ${node}`);
        var as = node.querySelectorAll('a');
        
        for(const a of as){
            aList.push(a);
        }
    }

    var linkList = [];
    for(const a of aList) {
        var href = a.href;
                //console.log(`text : ${a.text}, href : ${href}`);
            
        var linkData = { text: a.textContent.trim(), link: "" };
        //var linkData = { text: a.innerText.trim(), link: "" };
    
        if (linkData.text.length < 1 || href.indexOf('#') != -1) {
            
        }
        else if (href.indexOf('javascript') != -1) {
            var onClickContant = a.getAttribute('onclick');
            // console.log(`${onClickContant}`);
    
            if(onClickContant != null && onClickContant != undefined){
                var occElements = [];
                occElements = onClickContant.split("'");
                linkData["link"] = occElements[1];
                linkList.push(linkData);
            }
        }
        else {
            linkData['link'] = href;
            linkList.push(linkData);
        }
    
    }
    
    if(linkList.length == 0){
        aList = document.body.querySelectorAll('a');
    
        for(const a of aList) {
            var href = a.href;
            // console.log(`text : ${a.text}, href : ${href}`);
                
            var linkData = { text: a.textContent.trim(), link: "" };
        
            if (linkData.text.length < 1 || href.indexOf('#') != -1) {
                
            }
            else if (href.indexOf('javascript') != -1) {
                var onClickContant = a.getAttribute('onclick');
                // console.log(`${onClickContant}`);
        
                if(onClickContant != null && onClickContant != undefined){
                    var occElements = [];
                    occElements = onClickContant.split("'");
                    linkData["link"] = occElements[1];
                    linkList.push(linkData);
                }
            }
            else {
                linkData['link'] = href;
                linkList.push(linkData);
            }
        
        }
    }

    const filteredLinkList = [];

    if(linkList.length > 0) {
        const linkSet = new Set();

        for (const _linkData of linkList) {
            if(!linkSet.has(_linkData.link)) {
                linkSet.add(_linkData.link);
                filteredLinkList.push(_linkData);
            }
        }
    }
    
    var appData = {
        count: filteredLinkList.length,
        links: filteredLinkList
    }

    return filteredLinkList;
    
    //sysAppBox(1, appData);
}
