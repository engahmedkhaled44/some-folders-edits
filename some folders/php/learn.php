//function الداله 

<?php 
function greet($name, $color){
    echo "<p>hi , my name is $name and my favorite color is $color.  </p>";
}
 greet('ahmed', 'green');
 greet('khaled', 'blue');
?>

<h1><?php bloginfo('name'); ?></h1>
<p><?php bloginfo('description'); ?></p>

//array المصفوفه

<?php 

$count = 1 ;

while($count < 101){
    echo "<li>$count</li>";
    $count++;
}

?>


<?php
$names = array('ahmed' , 'khaled' , 'basel' , 'elmansy' , 'mostafa' , 'body') ;
$countName = 0 ;
while($countName < count($names)){
    echo "<li>hi, my name is $names[$countName]</li>";
    $countName++;
}
?>
<p>hi, my name is <?php echo $names[2]; ?></p>


//posts
<?php 

while(have_posts()) {
    the_post(); ?>
    <h2><a href="<?php the_permalink(); ?>"><?php  the_title(); ?></a></h2>
    <?php the_content(); ?> 
    <hr>
<?php }

?>