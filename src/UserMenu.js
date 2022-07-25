import React from 'react';
import { Route, Link } from 'react-router-dom';
import Join from './Join';

export default function UserMenu() {



  return (
    <div id="userMenu" style={{width:"1050px", margin:"0 auto", fontFamily:"noto sans", fontWeight:"400", letterSpacing:"-.3px", listStyleType:"none"}}>
      <ul class="list_menu" style={{fontSize:"12px", float:"right", display:"block", paddingInlineStart:"40px", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px", listStyleType:"none"}}>

        <li class="menu none_sub menu_join" style={{position:"relative", zIndex:"400", float:"left", display:"list-item"}}>
          <Link to="/Join" class="link_menu" style={{color:"#5f0080", float:"left", height:"37px", padding:"0 12px", lineHeight:"35px", whiteSpace:"nowrap", textDecoration:"none", backgroundColor:"transparent", listStyleType:"none"}}>회원가입</Link>
        </li> 

        <li class="menu none_sub menu_login" style={{position:"relative", zIndex:"400", float:"left", display:"list-item"}}>
          <a href="#" class="link_menu" style={{color:"#333", float:"left", height:"37px", padding:"0 12px", lineHeight:"35px", whiteSpace:"nowrap", textDecoration:"none", backgroundColor:"transparent", listStyleType:"none"}}>로그인</a>
        </li> 

        <li class="menu lst" style={{position:"relative", zIndex:"400", float:"left", display:"list-item"}}><a href="/shop/board/list.php?id=notice" class="link_menu" style={{color:"#333", float:"left", height:"37px", padding:"0 12px", lineHeight:"35px", whiteSpace:"nowrap", textDecoration:"none", backgroundColor:"transparent", listStyleType:"none"}}>고객센터</a> 
          {/* <ul class="sub">
            <li>
              <a href="#none" onclick="KurlyTrackerLink('/shop/board/list.php?id=notice', 'select_my_kurly_notice_list')">공지사항</a>
            </li>
            <li>
              <a href="#none" onclick="KurlyTrackerLink('/shop/service/faq.php', 'select_my_kurly_frequently_qna')">자주하는 질문</a>
            </li> 
            <li><a href="#none" onclick="KurlyTrackerLink('/mypage/inquiry/list', 'select_my_kurly_personal_inquiry_history')">1:1 문의</a>
            </li> 
            <li>
              <a href="#none" onclick="KurlyTrackerLink('/shop/main/html.php?htmid=mypage/bulk_order.htm', 'select_my_kurly_bulk_order')">대량주문 문의</a>
            </li> 
            <li>
              <a href="#none" onclick="KurlyTrackerLink('/shop/mypage/offer.php', 'select_my_kurly_product_offer')">상품 제안</a>
            </li> 
            <li><a href="#none" onclick="KurlyTrackerLink('/shop/mypage/echo_packing.php', 'select_my_kurly_eco_packing_feedback')">에코포장 피드백</a>
            </li>
          </ul> */}
        </li>
      </ul>
    </div>
  );
}