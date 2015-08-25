<div class="main-header">
	<div class="container">
		<div class="pull-left title-logo">
			<a href="{relative_path}/">
				<img class="{brand:logo:display} forum-logo" src="{brand:logo}" />
			</a>
			<!-- IF showSiteTitle -->
			<a href="{relative_path}/">
				<h1 class="navbar-brand forum-title">{title}</h1>
			</a>
			<!-- ENDIF showSiteTitle -->
		</div>
		<div class="pull-left">
			<ul class="main-menu">
				<li class="menu-recent"><h3><a href="{relative_path}/recent">Recent</a></h3></li>
				<li class="menu-popular"><h3><a href="{relative_path}/popular">Popular</a></h3></li>
			</ul>
		</div>

		
		<div class="pull-right">
			<!-- IF loggedIn -->
			<div id="user_label" class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#" id="user_dropdown">
					<img class="img-circle avatar" id="user-header-picture" src="{user.picture}"/>
				</a>
				<ul id="user-control-list" class="dropdown-menu dropdown-menu-right" aria-labelledby="user_dropdown">
					<li>
						<a id="user-profile-link" href="{relative_path}/user/{user.userslug}"><i class="fa fa-circle status {user.status}"></i> <span id="user-header-name">{user.username}</span></a>
					</li>
					<li id="logout-link">
						<a href="#">[[global:logout]]</a>
					</li>
					<li role="presentation" class="divider"></li>
					<li>
						<a href="#" class="user-status" data-status="online"><i class="fa fa-circle status online"></i><span> [[global:online]]</span></a>
					</li>
					<li>
						<a href="#" class="user-status" data-status="away"><i class="fa fa-circle status away"></i><span> [[global:away]]</span></a>
					</li>
					<li>
						<a href="#" class="user-status" data-status="dnd"><i class="fa fa-circle status dnd"></i><span> [[global:dnd]]</span></a>
					</li>
					<li>
						<a href="#" class="user-status" data-status="offline"><i class="fa fa-circle status offline"></i><span> [[global:invisible]]</span></a>
					</li>
				</ul>
			</div>
			<!-- ELSE -->
			<ul class="main-menu">
				<!-- IF allowRegistration -->
				<li class="menu-register"><h3><a href="{relative_path}/register">[[global:register]]</a></h3></li>
				<!-- ENDIF allowRegistration -->
				<li class="menu-login"><h3><a href="{relative_path}/login">[[global:login]]</a></h3></li>
			</ul>
			<!-- ENDIF loggedIn -->
		</div>
	</div>
</div>
<div class="sub-header">
	<div class="container">
		<div class="pull-left">
			<div class="btn-group btn-breadcrumb dropdown">
				<a href="{relative_path}/" id="btn-home" class="btn btn-default"><i class="fa fa-th fa-fw"></i></a>
				<a href="#" class="btn btn-default btn-info" id="action-button" data-toggle="dropdown"><i class="fa fa-plus fa-fw"></i> [[rocket:select-category]]</a>
				<ul class="dropdown-menu" role="menu" aria-labelledby="action-button" id="category-menu"></ul>
			</div>
		</div>
		<div class="pull-right" id="page-buttons"></div>
	</div>
</div>


<ul id="main-nav" class="nav pull-left" data-spy="affix" data-offset-top="70" data-offset-bottom="200">
	<!-- BEGIN navigation -->
	<!-- IF function.displayMenuItem, @index -->
	<li class="{navigation.class}">
		<a href="{relative_path}{navigation.route}" title="{navigation.title}" id="{navigation.id}"<!-- IF navigation.properties.targetBlank --> target="_blank"<!-- ENDIF navigation.properties.targetBlank -->>
			<!-- IF navigation.iconClass -->
			<i class="fa fa-fw {navigation.iconClass}"></i>
			<!-- ENDIF navigation.iconClass -->

			<!-- IF navigation.text -->
			<span class="{navigation.textClass}">{navigation.text}</span>
			<!-- ENDIF navigation.text -->
		</a>
	</li>
	<!-- ENDIF function.displayMenuItem -->
	<!-- END navigation -->
</ul>