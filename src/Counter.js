import React, { useState, useEffect } from 'react';
import Categorize from './categorisBook'; 
import './App.css';
import './index.css';

const Counter = () => {
    return(
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-md-3 tab-librery-options'>
                <ul class="nav nav-tabs tabs-left sideways">
                          <li><a href="#BookandBookletcCategories-v" data-toggle="tab">دسته بندی کتاب و جزوه</a></li>
                          <li><a href="#BookDonor-v" data-toggle="tab">اهدا کننده کتاب</a></li>
                          <li><a href="#Ability-v" data-toggle="tab">قابلیت رزرو کتاب</a></li>
                          <li><a href="#ReportUserList-v" data-toggle="tab">گزارش لیست کاربران  </a></li>
                          <li><a href="#BookListReport-v" data-toggle="tab">گزارش لیست کتاب  </a></li>
                          <li><a href="#BooCategorReport-v" data-toggle="tab">گزارش html برای دسته بندی کتاب  </a></li>
                          <li><a href="#ReportThelistBooks-v" data-toggle="tab">گزارش لیست کتب های رزرو شده   </a></li>



                      </ul> 
                </div>
                <div className='col-md-9'>
                <div class="tab-content">
                      <div class="tab-pane active" id="BookandBookletcCategories-v">
                            <Categorize></Categorize>
                      </div>
                      <div class="tab-pane" id="BookDonor-v">اهدا کننده کتاب</div>
                      <div class="tab-pane" id="Ability-v">قابلیت رزرو کتاب</div>
                      <div class="tab-pane " id="ReportUserList-v">گزارش لیست کاربران</div>
                      <div class="tab-pane " id="BookListReport-v">گزارش لیست کتاب.</div>
                      <div class="tab-pane " id="BooCategorReport-v">گزارش دسته بندی html کتاب </div>
                      <div class="tab-pane " id="ReportThelistBooks-v">گزارش لیست کتابهای رزرو شده.</div>
                    </div>
                     <div class="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default Counter;

