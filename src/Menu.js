import React from "react";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";


export default function Menu() {

  return (
    <div style={{width:"100%", float:"left", height: "56px", position:"relative", zIndex:"300", backgroundColor:"#fff", fontFamily:"Noto Sans", letterSpacing:"-0.3px"}}>
      <ul style={{position:"absoulte", display:"block", listStyleType:"none", margin: "0 40px 0 40px", padding: "10px"}}>
        <li className="menu1" style={{ textAlign:"center"}}>
          <a href="#" style={{ width:"148px", textDecoration:"none", float:"left", padding:"16px 0 0", color:"#333", lineHeight:"20px",textAlign:"center"}}>
            <span class="ico" style={{background: "#333",
  backgroundSize: "16px 14px"}}>dd</span>
            <span class="txt" style={{fontWeight:"700", margin:"0", padding:"0"}}>
              전체 카테고리
            </span>
          </a>
        </li>

        <li className="menu2" style={{textAlign:"center"}}>
          <a href="#" style={{ width:"124px", textDecoration:"none", float:"left", padding:"16px 0 0", color:"#333", lineHeight:"20px",textAlign:"center"}}>
            <span class="txt" style={{fontWeight:"700", margin:"0", padding:"0"}}>
              신상품
            </span>
          </a>
        </li>

        <li className="menu3" style={{textAlign:"center"}}>
          <a href="#" style={{ width:"116px", textDecoration:"none", float:"left", padding:"16px 0 0", color:"#333", lineHeight:"20px",textAlign:"center"}}>
            <span class="txt" style={{fontWeight:"700", margin:"0", padding:"0"}}>
              베스트
            </span>
          </a>
        </li>

        <li className="menu4" style={{textAlign:"center"}}>
          <a href="#" style={{ width:"124px", textDecoration:"none", float:"left", padding:"16px 0 0", color:"#333", lineHeight:"20px",textAlign:"center"}}>
            <span class="txt" style={{fontWeight:"700", margin:"0", padding:"0"}}>
              알뜰쇼핑
            </span>
          </a>
        </li>

        <li className="menu5" style={{display:"list-item", textAlign:"center"}}>
          <a href="#" style={{ width:"116px", textDecoration:"none", float:"left", padding:"16px 0 0", color:"#333", lineHeight:"20px",textAlign:"center"}}>
            <span class="txt" style={{fontWeight:"700", margin:"0", padding:"0"}}>
              특가/혜택
            </span>
          </a>
        </li>

        <div style={{display:"block", position:"absolute", right:"174px", top:"10px", width:"242px", wordBreak:"break-all"}}>
          <input name="sword" type="text" label="검색어" placeholder="검색어를 입력해주세요." autoComplete="off" class="inp_search" style={{border : "1px solid #333", display:"inline-block", textAlign:"start", width:"242px", height:"36px", padding:"0 60px 0 14px", borderRadius:"18px", backgroundColor:"f7f7f6", fontFamily:"Noto Sans", fontWeight:"400", fontSize:"12px", color:"#666", lineHeight:"16px", outline:"none", writingMode:"horizontal-tb !important"}}>
        </input>
        </div>

      <div className="location" style={{wordBreak:"break-all", boxSizing:"border-box", margin:"0", padding:"0", display:"block"}} >
        <button type="button" style={{ position:"absolute", right:"107px", width:"36px", heigth:"36px", textIndent:"-9999px", top: "10px", display:"inline-block", backgroundImage: 'url(https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1)', outline:"none"}}>
        </button>
      </div>

      <div className="Pick" style={{wordBreak:"break-all", boxSizing:"border-box", margin:"0", padding:"0", display:"block"}}>
        <a href="/shop/mypage/mypage_pick.php" class="btn_pick" style={{display:"inline-block", textDecoration:"none", width:"36px", height:"36px"}}>
            <FavoriteBorder/>
        </a>
      </div>

      <div className="Cart" style={{wordBreak:"break-all", boxSizing:"border-box", margin:"0", padding:"0", display:"block"}}>
        <a href="#" class="btn_cart" style={{display:"inline-block", textDecoration:"none", width:"36px", height:"36px"}}>
        </a>
      </div>


      </ul>

      
    </div>
  );
}