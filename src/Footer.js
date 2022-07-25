import React from "react";

export default function Footer() {

  return (
    <div className="footer" style={{width:"100%", height:"522px", fontWeight:"400", letterSpacing:"-.2px", fontFamily:"noto sans"}}>

      <div className="footer-top" style={{width:"1050px", margin:"0 auto"}}>
        <div className="inner_footer" style={{overflow:"hidden", paddingBottom:"24px"}}>
          <div className="footer_cc" style={{float:"left", width:"534px"}}>
            <h2 className="tit_cc">고객행복센터</h2>
            <div className="call view" style={{paddingTop:"20px", overflow:"hidden", wordBreak:"break-all"}}>
              <h3 style={{display:"block", fontSize:"1.17em", fontWeight:"bold"}}>1644-1107</h3>
              <dl className="list" style={{fontSize:"14px", color:"#333", lineHeight:"22px", letterSpacing:"-.2px", display:"block", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px"}}>
                <dt style={{display: "block", width:"534px", height:"22px"}}>365고객센터</dt>
                <dd style={{display: "block",  width:"534px", height:"22px"}}>오전 7시 - 오후 7시</dd>
              </dl>
            </div>

            <div className="kakao" style={{height:"60px"}}>
              <h3 style={{display:"block", fontSize:"1.17em", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px", fontWeight:"bold"}}>
                <a className="tit" href="#" style={{height:"31px", paddingTop:"7px", marginTop:"3px", border:"1px solid #e3e3e3", borderRadius:"3px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"22px", textAlign:"center", textDecoration:"none", float:"left", width:"138px", marginRight:"16px"}}>카카오톡 문의</a>
              </h3>
              <dl className="list" style={{fontSize:"14px", color:"#333", lineHeight:"22px", letterSpacing:"-.2px", display:"block"}}>
                <dt style={{width:"534px", height:"22px"}}>365고객센터</dt>
                <dd style={{width:"534px", height:"22px", color:"#999"}}>오전 7시 - 오후 7시</dd>
              </dl>
            </div>

            <div className="qna" style={{height:"60px"}}>
              <h3 style={{display:"block", fontSize:"1.17em", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px", fontWeight:"bold"}}>
                <a className="tit" href="#" style={{height:"31px", paddingTop:"7px", marginTop:"3px", border:"1px solid #e3e3e3", borderRadius:"3px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"22px", textAlign:"center", textDecoration:"none", float:"left", width:"138px", marginRight:"16px"}}>1:1 문의</a>
              </h3>
              <dl className="list" style={{fontSize:"14px", color:"#333", lineHeight:"22px", letterSpacing:"-.2px", display:"block"}}>
                <dt style={{width:"534px", height:"22px"}}>24시간 접수 가능</dt>
                <dd style={{width:"534px", height:"22px", color:"#999"}}>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
              </dl>
            </div>

            <div className="bulkorder" style={{height:"60px"}}>
              <h3 style={{display:"block", fontSize:"1.17em", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px", fontWeight:"bold"}}>
                <a className="tit" href="#" style={{height:"31px", paddingTop:"7px", marginTop:"3px", border:"1px solid #e3e3e3", borderRadius:"3px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"22px", textAlign:"center", textDecoration:"none", float:"left", width:"138px", marginRight:"16px"}}>대량주문 문의</a>
              </h3>
              <dl className="list" style={{fontSize:"14px", color:"#333", lineHeight:"22px", letterSpacing:"-.2px", display:"block"}}>
                <dt style={{width:"534px", height:"22px", color:"#999", paddingTop:"9px"}}>비회원의 경우 메일로 문의 바랍니다.</dt>
              </dl>
            </div>

          </div>

          <div className="company" style={{float:"left", paddingTop:"29px", fontSize:"12px", color:"#999", lineHeight:"20px", width:"476.45px", height:"293px"}}>

            <ul class="list" style={{listStyleType:"none", width:"100%", paddingBottom:"29px", display:"block", height:"29px"}}>
              <li style={{display:"list-item", float:"left", paddingRight:"16px"}}>
                <a class="link" href="/shop/introduce/about_kurly.php" style={{textDecoration:"none", color:"#333", fontSize:"14px", lineHeight:"18px"}}>컬리소개</a>
              </li>
              <li style={{display:"list-item", float:"left", paddingRight:"16px"}}>
                <a class="link" href="https://www.youtube.com/embed/WEep7BcboMQ?rel=0showinfo=0wmode=opaqueenablejsapi=1" onclick="window.open(this.href, 'pop', 'width=1330,height=660,scrollbars=yes');return false;" style={{textDecoration:"none", color:"#333", fontSize:"14px", lineHeight:"18px"}}>컬리소개영상</a>
              </li>
              <li style={{display:"list-item", float:"left", paddingRight:"16px"}}>
                <a class="link" href="https://marketkurly.recruiter.co.kr/appsite/company/index" target="_blank" style={{textDecoration:"none", color:"#333", fontSize:"14px", lineHeight:"18px"}}>인재채용</a>
              </li>
              <li style={{display:"list-item", float:"left", paddingRight:"16px"}}>
                <a class="link" href="/user-terms/agreement" style={{textDecoration:"none", color:"#333", fontSize:"14px", lineHeight:"18px"}}>이용약관</a>
              </li>
              <li style={{display:"list-item", float:"left", paddingRight:"16px"}}>
                <a class="link emph" href="/user-terms/privacy-policy" style={{textDecoration:"none", color:"#333", fontSize:"14px", lineHeight:"18px"}}>개인정보처리방침</a>
              </li>
              <li style={{display:"list-item", float:"left", paddingRight:"16px"}}>
                <a class="link" href="/user-guide" style={{textDecoration:"none", color:"#333", fontSize:"14px", lineHeight:"18px"}}>이용안내</a>
              </li>
            </ul>
            "법인명 (상호) : 주식회사 컬리 "
            <span class="bar">I</span>
            " 사업자등록번호 : 261-81-23567 "
            <a href="#" target="_blank" className="link">사업자정보 확인</a>
            <br></br>
            " 통신판매업 : 제 2018-서울강남-01646 호 "
            <span className="bar">I</span>
            " 개인정보보호책임자 : 이원준 "
            <br></br>
            " 주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) "
            <span className="bar">I</span>
            " 대표이사 : 김슬아 "
            <br></br>
            " 입점문의 : "
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform?usp=sf_link" target="_blank" class="link">입점문의하기</a>
            <span class="bar">I</span>
            " 마케팅제휴 : "
            <a href="mailto:business@kurlycorp.com" class="link">business@kurlycorp.com</a>
            <br></br>
            " 채용문의 : "
            <a href="mailto:recruit@kurlycorp.com" class="link">recruit@kurlycorp.com</a>
            <br></br>
            " 팩스: 010 - 7500 - 6098 "
            <span className="bar">I</span>
            " 이메일 : "
            <a href="mailto:help@kurlycorp.com" class="link">help@kurlycorp.com</a>
            <br></br>
            " 대량주문 문의 : "
            <a href="mailto:kurlygift@kurlycorp.com" class="link">kurlygift@kurlycorp.com</a>
            <br></br>

            <ul class="list_sns" style={{float:"left", paddingTop:"45px", listStyleType:"none"}}>
              <li style={{display:"list-item",float:"left", width:"40px", height:"30px"}}>
              <a href="https://instagram.com/marketkurly" class="link_sns" target="_blank" style={{textDecoration:"none", backgroundColor:"transparent"}}>
                <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기" style={{verticalAlign:"top", border:"0", width:"30px", height:"30px"}}></img>
                </a>
              </li>
              <li style={{display:"list-item",float:"left", width:"40px", height:"30px"}}>
              <a href="https://www.facebook.com/marketkurly" class="link_sns" target="_blank" style={{textDecoration:"none", backgroundColor:"transparent"}}><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="마켓컬리 페이스북 바로가기" style={{verticalAlign:"top", border:"0", width:"30px", height:"30px"}}></img></a>
              </li>
              <li style={{display:"list-item",float:"left", width:"40px", height:"30px"}}>
              <a href="http://blog.naver.com/marketkurly" class="link_sns" target="_blank" style={{textDecoration:"none", backgroundColor:"transparent"}}><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="마켓컬리 네이버블로그 바로가기" style={{verticalAlign:"top", border:"0", width:"30px", height:"30px"}}></img></a>
              </li>
              <li style={{display:"list-item",float:"left", width:"40px", height:"30px"}}>
              <a href="https://m.post.naver.com/marketkurly" class="link_sns" target="_blank" style={{textDecoration:"none", backgroundColor:"transparent"}}><img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 유튜브 바로가기" style={{verticalAlign:"top", border:"0", width:"30px", height:"30px"}}></img></a>
              </li>
              <li style={{display:"list-item",float:"left", width:"40px", height:"30px"}}>
              <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" class="link_sns lst" target="_blank" style={{textDecoration:"none", backgroundColor:"transparent"}}><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기" style={{verticalAlign:"top", border:"0", width:"30px", height:"30px"}}></img ></a>
              </li>
          </ul>
        </div>

        </div>
        <div className="footer_link" style={{overflow:"hidden", padding:"20px 0 24px", borderTop:"1px solid #eee", letterSpacing:"0", width:"1050px", height:"97px", justifyContent:"center"}}>

        <div className="linkContent" style={{float:"left", paddingTop:"3px" }}>

          <a href="#none" onclick="popup('https://res.kurly.com/kurly/img/2022/isms_220310.png',550,700);return false;" class="mark" target="_blank" style={{float:"left", width:"267px", backgroundColor:"transparent", textDecoration:"none", color:"inherit"}}>
            <img src="https://res.kurly.com/kurly/logo/isms_220310.png" alt="isms 로고" class="logo" style={{float:"left", width:"34px", height:"34px", marginRight:"10px", verticalAlign:"top", maxWidth:"100%"}}/>
            <p class="txt" style={{float:"left", paddingTop:"1px", fontSize:"10px", color:"#999", lineHeight:"16px", letterSpacing:"-.5px", whiteSpace:"nowrap"}}>[인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영<br></br>(심사받지 않은 물리적 인프라 제외)<br></br>[유효기간] 2022.01.19 ~ 2025.01.18</p>
          </a>

          <a href="#none" onclick="popup('https://www.eprivacy.or.kr/front/certifiedSiteMark/certifiedSiteMarkPopup.do?certCmd=EPcertNum=2022-EP-R002',527,720);return false;" class="mark" target="_blank" style={{float:"left", width:"267px", backgroundColor:"transparent", textDecoration:"none", color:"inherit"}}>
            <img src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png" alt="eprivacy plus 로고" class="logo" style={{float:"left", width:"34px", height:"34px", marginRight:"10px", verticalAlign:"top", maxWidth:"100%"}}/>
            <p class="txt" style={{float:"left", paddingTop:"1px", fontSize:"10px", color:"#999", lineHeight:"16px", letterSpacing:"-.5px", whiteSpace:"nowrap"}}>개인정보보호 우수 웹사이트 ·<br></br>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
          </a>

          <a href="#none" onclick="popup('http://pgweb.uplus.co.kr/ms/escrow/s_escrowYn.do?mertid=go_thefarmers',460,550);return false;" class="mark lguplus" target="_blank" style={{float:"left", width:"267px", backgroundColor:"transparent", textDecoration:"none", color:"inherit"}}>
            <img src="https://res.kurly.com/pc/service/main/2009/logo_payments.png" alt="payments 로고" class="logo" style={{float:"left", width:"102px", height:"34px", marginRight:"10px", verticalAlign:"top", maxWidth:"100%"}}/>
            <p class="txt" style={{float:"left", paddingTop:"1px", fontSize:"10px", color:"#999", lineHeight:"16px", letterSpacing:"-.5px", whiteSpace:"nowrap"}}>고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한<br></br>토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</p>
            </a>

        </div>
      </div>
      </div>
      

      <div className="footer-bottom">
        <div className="footer_indemnification"  style={{backgroundColor:"#f7f7f7", textAlign:"center", padding:"19px 0 27px"}}>
          <p class="txt" style={{fontSize:"10px", lineHeight:"16px", color:"#999", letterSpacing:"-.5px", display:"block", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px"}}>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</p>
          <p class="txt" style={{fontSize:"10px", lineHeight:"16px", color:"#999", letterSpacing:"-.5px", display:"block", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px"}}>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
          <em class="copy" style={{fontStyle:"normal", fontSize:"10px", color:"#949296", lineHeight:"25px", letterSpacing:"0", display:"block", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px"}}>© KURLY CORP. ALL RIGHTS RESERVED</em>
        </div>

      </div>

    </div>
  );
}