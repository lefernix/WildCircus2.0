<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<h1>Ajouter un Artiste</h1>
		<?php
		$mysqli = new mysqli('localhost', 'root', 'root', 'essai');
		$mysqli->set_charset("utf8");
		$requete='INSERT INTO Artistes VALUES(NULL,"'.$_POST['nom'].'","'.$_POST['prenom'].'","'.$_POST['surnom'].'","'.$_POST['age'].'","'.$_POST['role'].'")';
		$resultat = $mysqli->query($requete);
		if ($resultat)
			echo "<p>Le contact a été ajouté</p>";
		else
			echo "<p>Erreur</p>";
		?>
	</body> 
</html>