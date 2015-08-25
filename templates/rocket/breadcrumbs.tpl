<div class="btn-group btn-breadcrumb dropdown">
	<a href="{relative_path}/" id="btn-home" class="btn btn-default"><i class="fa fa-th fa-fw"></i></a>
	<!-- BEGIN breadcrumbs -->
	<!-- IF !@first -->
	<a href="{breadcrumbs.url}" class="btn btn-default btn-breadcrumb-page">{breadcrumbs.text}</a>
	<!-- ENDIF !@first -->
	<!-- END breadcrumbs -->
	<a href="#" class="btn btn-default btn-info" id="action-button" data-toggle="dropdown"><i class="fa fa-plus fa-fw"></i> {actionText}</a>
	<ul class="dropdown-menu" role="menu" aria-labelledby="action-button" id="category-menu"></ul>
</div>