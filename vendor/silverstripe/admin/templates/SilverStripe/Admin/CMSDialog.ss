<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<% base_tag %>
<title>$Title</title>
</head>

<body class="cms cms-dialog $BaseCSSClasses" lang="$Locale.RFC1766" <% if $GraphQLLegacy %>data-graphql-legacy="1"<% end_if %>>
	<div class="cms-dialog-content">
		$Content
		$Form
	</div>
</body>
</html>
