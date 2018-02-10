<!-- begin header -->

<div class="container hidden-xs">
  <div class="row" id="main-header">
    <nav id="main-header-text" class="navbar navbar-default hidden-xs" role="navigation" >
      <div class="navbar-text navbar-left">
        <div><a href="http://inside.boeing.com" title="Boeing Home"><img style="margin-top:16px;" src="/common/img/boeinglogo.gif" alt="Boeing"></a></div>
      </div>
      <!--request a brand zone here: http://intranetstyleguide.web.boeing.com/banners/#request -->
      <div class="navbar-right"><a href="index.asp"><img src="/images/bz_ENT_BPDS.gif"></a></div>
    </nav>
  </div>
</div>

<!-- logo header for small views --> 
<!-- hidden on the desktop -->
<div class="container visible-xs">
  <header class="row brandzone">
    <brandlogo><a href="http://inside.boeing.com" title="Boeing Home"><img src="/common/img/boeinglogo_sm.gif" alt="Boeing Home"/></a></brandlogo>
    <hamburger class="pull-right" role="navigation">
      <button type="button" id="xs-menu-icon" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav-list">
      <span class="icon-bar">
      </span>
      <span class="icon-bar">
      </span>
      <span class="icon-bar">
      </span>
      </button>
    </hamburger>
    <search_icon class="pull-right">
      <button type="button" class="btn btn-primary navbar-btn navbar-toggle searchmini navbar-right" id="xs-search-button"><img id="xs-search-icon-transparent" class="search-icon-off" src="/common/img/search_icon_transparent.png" width="22" height="19" alt="Search BPDS"></button>
    </search_icon>
  </header>
</div>

<!-- begin nav bar -->
<div class="navbar-fullwidth default">
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-default" id="main-navbar" role="navigation"> 
        
        <!-- begin hamburger and brand header -->
        <div class="navbar-header visible-xs"> 
          <!-- begin  MODAL search -->
          <form id="xs-search-form" role="search" method="get" action="http://search.boeing.com/pages/results.aspx" >
            <span class="pull-right">
              <button type="submit" id="xs-search-go-button" class="btn btn-default pull-right">Go</button>
            </span>
            <div id="xs-search-term">
              <input type="text"  id="xs-search-term-input" class="form-control" placeholder="Search" name="k">
              <h1 class="navbar-brand navbar-text" id="xs-title-text">Boeing Product Development System</h1>
            </div>
            <input type="hidden" name="source" value="ngs" />
            <input type="hidden" name="u" value="http://bpds.web.boeing.com" />
          </form>
          <!-- end search --> 
        </div>
        
        <!-- begin nav -->
        <div class="navbar-collapse collapse" id="main-nav-list" >
          <div class="col-sm-8 col-md-8">
            <ul class="nav navbar-nav">
              <!-- 1 -->
              <li class="active"><a href="index.asp">Home</a></li>
              
              <!-- 2 -->
              <li class="dropdown"><a href="javascript:void()" class="dropdown-toggle" data-toggle="dropdown">About BPDS
                  <span class="caret">
                </span>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="overview.asp">BPDS Overview</a></li>
                  <li><a href="organization.asp">Organization</a></li>
                  <li class="dropdown-submenu"><a href="javascript:void(0);">Key Presentations</a>
                    <ul class="dropdown-menu">
                      <li><a href="http://leanplus.web.boeing.com/Events/secure/Fall2014/files/BPDS/1StateoftheInitiatives.pdf">State of the Initiatives – DPE</a></li>
                      <li><a href="http://leanplus.web.boeing.com/Events/secure/Fall2014/files/BPDS/3Session1_BPDSKickoff.pdf">BPDS Introduction</a></li>
                      <li><a href="http://leanplus.web.boeing.com/Events/secure/Fall2014/video/bpds_panel.html">BPDS Panel at 2014 Leadership Summit</a></li>
                      <li><a href="http://airplanedevelopment.web.boeing.com/bpds/docs/Breaking_the_Cost_Curve_%20speaker_notes.pdf">BPDS in BCA Airplane  Development</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <!-- 3 -->
              <li class="dropdown"><a href="javascript:void()" class="dropdown-toggle" data-toggle="dropdown">Strategies and Methods
                  <span class="caret">
                </span>
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown-submenu"><a href="javascript:void(0);" data-toggle="modal" data-target="#myWindow1">Optimize Value</a>
                    <ul class="dropdown-menu">
                      <li><a href="method_dfv.asp">Design for Value</a></li>
                      <li><a href="method_dfp.asp">Design for Producibility</a></li>
                      <li><a href="method_se.asp">Systems Engineering</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu"><a href="javascript:void(0);" data-toggle="modal" data-target="#myWindow2">Control Demand</a>
                    <ul class="dropdown-menu">
                      <li><a href="method_rcm.asp">Reuse, Commonality and Modularity</a></li>
                      <li><a href="method_tmm.asp">Technical and Manufacturing Maturity</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu"><a href="javascript:void(0);" data-toggle="modal" data-target="#myWindow3">Accelerate Flow </a>
                    <ul class="dropdown-menu">
                      <li><a href="method_opd.asp">Operationalize Product Development</a></li>
                      <li><a href="javascript:void(0);" data-toggle="modal" data-target="#myWindow3">Geographic Diversity</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-submenu"><a href="javascript:void(0);" data-toggle="modal" data-target="#myWindow4">Prevent Traveled Risk</a>
                    <ul class="dropdown-menu">
                      <li><a href="method_kit.asp">Full Kit</a></li>
                      <li><a href="method_gated.asp">Gated Process</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- end nav --> 
          <!-- begin  MODAL search -->
          <div class="col-sm-4 col-md-4">
          <!--  <span class="navbar-right hidden-sm" id="nav-search-icon">
              <a href="#"  data-toggle="modal" data-target="#search_modal"><img src="/common/img/searchbutton.jpg"></a>
            </span>-->
            <form class="navbar-form navbar-right hidden-xs form-search form-inline" role="search" method="get" action="http://search.boeing.com/pages/results.aspx" id="nav-search-form" >
              <div class="input-group">
                <input type="text" class="form-control header-search-input search-query" placeholder="Search BPDS"  name="k" id="srch-term">
                <span class="input-group-btn">
                  <button type="submit" class="btn btn-link header-search-icon"> 
                  <!--<span class="glyphicon glyphicon-search"></span>--><img  src="/common/img/searchbutton.jpg" alt="Search BPDS"> </button>
                </span>
              </div>
              <input type="hidden" name="source" value="ngs" />
              <input type="hidden" name="u" value="http://bpds.web.boeing.com/" />
            </form>
            <!-- end search --> 
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>
<!-- end header --> 