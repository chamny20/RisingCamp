import React from "react";

export default function Join() {

  return (
    <div>
      <div className="tit_page" style={{overflow:"hidden", width:"1050px", margin:"0 auto", padding:"50px 0 51px"}}>
      <h2 className="tit" style={{fontWeight:"700", fontSize:"28px", color:"#333", lineHeight:"35px", textAlign:"center", letterSpacing:"-1px"}}>회원가입</h2>
      </div>

      <div className="page_aticle" style={{width:"1050px", margin:"0 auto"}}>
        <div className="type_form member_join">
          <form id="form" method="post" style={{display:"block"}}>
            <p class="page_sub" style={{paddingBottom:"10px", fontSize:"12px", color:"#666", lineHeight:"17px", textAlign:"right"}}>
              <span class="ico" style={{paddingRight:"2px", color:"#ee6a7b"}}>*</span>
              "필수입력사항"
            </p>
            <table class="tbl_comm" style={{width:"100%", borderTop:"2px solid #333", display:"table", textIndent:"initial", borderColor:"grey"}}>
              <tbody>
                <tr className="id" style={{display:"table-row", verticalAlign:"inherit", borderColor:"inherit"}}>
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    아이디
                    <span class="ico" style={{color:"#ee6a7b"}}>*</span>
                  </th>
                  <td style={{width:"481px", height:"74px", paddingTop:"19px", padding:"10px 0", borderTop:"14px", verticalAlign:"top", textAlign:"left", display:"table-cell"}}>
                    <input type="text" name="m_id" value="" maxlength="16" required="" fld_esssential="" option="regId" label="아이디" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" style={{width:"332px", height:"44px", padding:"0 14px", border:"1px solid #ccc", fontsize:"14px", color:"#333", lineHeight:"20px", borderRadius:"3px", background:"#fff", outline:"none", verticalAlign:"top"}}/>
                    <input type="hidden" name="chk_id" required="" fld_esssential="" label="아이디중복체크" value="" style={{width:"120px", height:"44px", appearance:"none", backgroundColor:"initial", writingMode:"horizontal-tb"}}/>
                    <a class="btn default" href="javascript:chkId()" style={{border:"1px solid #5f0080", backgroundColor:"#fff", color:"#5f0080", textDecoration:"none", display:"inline-block", width:"120px", borderRadius:"3px", fontWeight:"700", fontsize:"14px", lineHeight:"40px", textAlign:"center", outline:"none", fontFamily:"noto sans", marginLeft:"5px", verticalAlign:"top"}}>중복확인</a>
                    
                  </td>
                  
                </tr>

                <tr className="pwd" style={{display:"table-row", verticalAlign:"inherit", borderColor:"inherit"}}>
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    비밀번호
                    <span class="ico" style={{color:"#ee6a7b"}}>*</span>
                  </th>
                  <td style={{width:"481px", height:"74px", paddingTop:"19px", padding:"10px 0", borderTop:"14px", verticalAlign:"top", textAlign:"left", display:"table-cell"}}>
                    <input type="text" name="m_id" value="" maxlength="16" required="" fld_esssential="" option="regId" label="아이디" placeholder="비밀번호를 입력해주세요" style={{width:"332px", height:"44px", padding:"0 14px", border:"1px solid #ccc", fontsize:"14px", color:"#333", lineHeight:"20px", borderRadius:"3px", background:"#fff", outline:"none", verticalAlign:"top"}}/>
                    <input type="hidden" name="chk_id" required="" fld_esssential="" label="아이디중복체크" value="" style={{width:"120px", height:"44px", appearance:"none", backgroundColor:"initial", writingMode:"horizontal-tb"}}/>
                
                    
                  </td>
                </tr>


                <tr className="valid_pwd">
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    비밀번호확인
                    <span class="ico" style={{color:"#ee6a7b"}}>*</span>
                  </th>
                  <td style={{width:"481px", height:"74px", paddingTop:"19px", padding:"10px 0", borderTop:"14px", verticalAlign:"top", textAlign:"left", display:"table-cell"}}>
                    <input type="text" name="m_id" value="" maxlength="16" required="" fld_esssential="" option="regId" label="아이디" placeholder="비밀번호를 한번 더 입력해주세요" style={{width:"332px", height:"44px", padding:"0 14px", border:"1px solid #ccc", fontsize:"14px", color:"#333", lineHeight:"20px", borderRadius:"3px", background:"#fff", outline:"none", verticalAlign:"top"}}/>
                    <input type="hidden" name="chk_id" required="" fld_esssential="" label="아이디중복체크" value="" style={{width:"120px", height:"44px", appearance:"none", backgroundColor:"initial", writingMode:"horizontal-tb"}}/>
                
                    
                  </td>
                </tr>

                <tr className="name">
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    이름
                    <span class="ico" style={{color:"#ee6a7b"}}>*</span>
                  </th>
                  <td style={{width:"481px", height:"74px", paddingTop:"19px", padding:"10px 0", borderTop:"14px", verticalAlign:"top", textAlign:"left", display:"table-cell"}}>
                    <input type="text" name="m_id" value="" maxlength="16" required="" fld_esssential="" option="regId" label="아이디" placeholder="이름을 입력해주세요" style={{width:"332px", height:"44px", padding:"0 14px", border:"1px solid #ccc", fontsize:"14px", color:"#333", lineHeight:"20px", borderRadius:"3px", background:"#fff", outline:"none", verticalAlign:"top"}}/>
                    <input type="hidden" name="chk_id" required="" fld_esssential="" label="아이디중복체크" value="" style={{width:"120px", height:"44px", appearance:"none", backgroundColor:"initial", writingMode:"horizontal-tb"}}/>
                
                    
                  </td>
                  
                </tr>
                
                
                
                <tr className="email">
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    이메일
                    <span class="ico" style={{color:"#ee6a7b"}}>*</span>
                  </th>
                  <td style={{width:"481px", height:"74px", paddingTop:"19px", padding:"10px 0", borderTop:"14px", verticalAlign:"top", textAlign:"left", display:"table-cell"}}>
                    <input type="text" name="m_id" value="" maxlength="16" required="" fld_esssential="" option="regId" label="아이디" placeholder="예: marketkurly@kurly.com" style={{width:"332px", height:"44px", padding:"0 14px", border:"1px solid #ccc", fontsize:"14px", color:"#333", lineHeight:"20px", borderRadius:"3px", background:"#fff", outline:"none", verticalAlign:"top"}}/>
                    <input type="hidden" name="chk_id" required="" fld_esssential="" label="아이디중복체크" value="" style={{width:"120px", height:"44px", appearance:"none", backgroundColor:"initial", writingMode:"horizontal-tb"}}/>
                
                    
                  </td>
                </tr>

                <tr className="field_phone">
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    휴대폰
                    <span class="ico" style={{color:"#ee6a7b"}}>*</span>
                  </th>
                  <td style={{width:"481px", height:"74px", paddingTop:"19px", padding:"10px 0", borderTop:"14px", verticalAlign:"top", textAlign:"left", display:"table-cell"}}>
                    <input type="text" name="m_id" value="" maxlength="16" required="" fld_esssential="" option="regId" label="아이디" placeholder="숫자만 입력해주세요" style={{width:"332px", height:"44px", padding:"0 14px", border:"1px solid #ccc", fontsize:"14px", color:"#333", lineHeight:"20px", borderRadius:"3px", background:"#fff", outline:"none", verticalAlign:"top"}}/>
                    <input type="hidden" name="chk_id" required="" fld_esssential="" label="아이디중복체크" value="" style={{width:"120px", height:"44px", appearance:"none", backgroundColor:"initial", writingMode:"horizontal-tb"}}/>

                    <a class="btn default" href="javascript:chkId()" style={{border:"1px solid #ddd", backgroundColor:"#fff", color:"#ddd", textDecoration:"none", display:"inline-block", width:"120px", borderRadius:"3px", fontsize:"14px", lineHeight:"40px", textAlign:"center", outline:"none", fontFamily:"noto sans", marginLeft:"5px", verticalAlign:"top"}}>인증번호받기</a>
                
                    
                  </td>
                </tr>


                <tr className="address">
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    주소
                    <span class="ico" style={{color:"#ee6a7b"}}>*</span>
                  </th>
                  <a href="#none" id="addressSearch" class="search" onclick="popup('../proc/popup_address.php',530,500,'center')" style={{border:"1px solid #5f0080", backgroundColor:"#fff", color:"#5f0080", textDecoration:"none", display:"inline-block", width:"362px", heigth: "74px", borderRadius:"3px", fontWeight:"700", fontsize:"14px", lineHeight:"40px", textAlign:"center", outline:"none", fontFamily:"noto sans", marginLeft:"5px", verticalAlign:"top"}}>
                  <span id="addressNo" class="address_no" data-text="재검색" >주소 검색</span>
                  </a>                  
                </tr>


                <tr className="select_sex">
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    성별
                  </th>
                  <td style={{padding:"10px 0", borderTop:"0", fontsize:"14px", verticalAlign:"top", textAlign:"left", display:"table-cell"}}>
                  <label class="" style={{display:"inline-block", padding:"10px 52px 10px 0", verticalAlign:"top"}}>
                  <input type="radio" name="sex" value="m"/>
                  <span class="ico"></span>남자
                  </label>
                  <label class="" style={{display:"inline-block", padding:"10px 52px 10px 0", verticalAlign:"top"}}>
                  <input type="radio" name="sex" value="w"/>
                  <span class="ico"></span>여자
                  </label>
                  <label class="checked" style={{display:"inline-block", padding:"10px 52px 10px 0", verticalAlign:"top"}}>
                  <input type="radio" name="sex" value="n" checked="checked"/>
                  <span class="ico"></span>선택안함
                  </label>
                  </td>
                  
                </tr>


                <tr className="birth" style={{display:"table-row", verticalAlign:"inherit", borderColor:"inherit"}}>
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    생년월일
                  </th>

                  <input type="text" name="m_id" value="" maxlength="16" required="" fld_esssential="" option="regId" label="아이디" placeholder="    YYYY  /   MM   /   DD   " style={{width:"332px", height:"44px", padding:"0 14px", border:"1px solid #ccc", fontsize:"14px", color:"#333", lineHeight:"20px", borderRadius:"3px", background:"#fff", outline:"none", verticalAlign:"top"}}/>

                </tr>


                <tr className="route" style={{display:"table-row", verticalAlign:"inherit", borderColor:"inherit"}}>
                  <th style={{width:"159px", padding:"29px 0 0 20px", fontWeight:"700", fontSize:"14px", color:"#333", lineHeight:"20px", verticalAlign:"top", textAlign:"left"}}>
                    추가입력 사항
                  </th>

                </tr>


                <tr className="agree"></tr>
              </tbody>

            </table>
            <div id="formSubmit" className="form_footer" style={{paddingTop:"40px", textAlign:"center" }}>
              <button type="button" class="btn active btn_join" onclick="formJoinSubmit()" style={{width:"240px", height:"56px", fontsize:"16px", lineHeight:"54px", border:"1px solid #5f0081", backgroundColor:"#5f0080", color:"#fff", borderRadius:"3px"}}>가입하기</button>

            </div>
          </form>

        </div>


      </div>

      
    </div>

  );
}