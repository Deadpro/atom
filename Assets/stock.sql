-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 24, 2014 at 08:44 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `chic`
--

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE IF NOT EXISTS `stock` (
  `stockID` int(2) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `categoryID` int(2) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `thumbnail` varchar(100) NOT NULL,
  `bigphoto` varchar(100) NOT NULL,
  `topline` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  PRIMARY KEY (`stockID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`stockID`, `name`, `categoryID`, `price`, `thumbnail`, `bigphoto`, `topline`, `description`) VALUES
(1, 'Pattern Knit Convertible Skirt', 1, '45.00', 'convertible-skirt-tb.jpg', 'convertible-skirt.jpg', 'Add a little swing to your stride.', '<font face="arial">Fluid blend of cotton and rayon-modal, with a hint of stretch. Easy pull-on styling Self-fabric waistband folds, scrunches or lies flat, you decide.&nbsp;</font><div><font face="arial"><br></font></div><div><font face="arial">Stripes are arranged in a flattering chevron pattern Falls to the knee You love the drape of cotton/modal skirts and dresses. And why not? They make your figure look terrific. This time, we''ve given the skirt a self-fabric waistband you can fold, scrunch or wear flat - for versatility and total comfort.&nbsp;</font></div><div><font face="arial"><br></font></div><div><font face="arial">58% cotton / 48% rayon-modal / 4% spandex.</font></div>'),
(11, 'Fit 2 Linen Cotton Wide Leg Pants', 3, '70.00', 'wide-leg-pants-tb.jpg', 'wide-leg-pants.jpg', 'A nautical nod.', 'Crisp, light blend of linen and cotton Smooth-fitting contour waist Functional drawstring adjusts the fit Offset side pockets, patch pockets in back Fit 2: Sits slightly below the natural waist, wide legs have a bit of ease in the thigh We''ll hem them for free. Everything about them is easy: from wide-leg silhouette to drawstring waist to cool blend of cotton and linen. The overall shape is comfortable and just slightly slouchy (in a most appealing way). So you can wear pants at the height of the summer - and still feel cool doing it. 53% linen/47% cotton.'),
(2, 'Linen embroidered tie-back skirt', 1, '110.00', 'tie-back-skirt-tb.jpg', 'tie-back-skirt.jpg', 'Linen fit to twirl.', 'Light, airy linen fabric Pretty border embroidery Comfortable back-elastic waistband Gored styling gives it a pretty sweep without adding bulk Self-fabric sash is included Soft full lining Everything about it says "summer." The sweep, the airy quality, the way it''ll make you feel. Made of soft linen, with an easy back-elastic waist and a self-fabric sash. And totally twirl worthy.'),
(3, 'French terry skirt', 1, '60.00', 'french-terry-skirt-tb.jpg', 'french-terry-skirt.jpg', 'Wear-anywhere comfort.', 'All-cotton slub jersey has thick-and-thin texture Flattering A-line shape Rib-knit, drawstring waistband feels comfortable, fits perfectly Top-stitched front pockets Falls to the knee It''s our awesome slub French terry, this time in a skirt. The A-line shape does great things for any figure. And the drawstring waist makes it oh, so comfortable. You''ll wear it to work, on weekends - maybe even as a cover-up! 69% cotton/31% rayon.'),
(4, 'Denim skirt', 1, '65.00', 'denim-skirt-tb.jpg', 'denim-skirt.jpg', 'A dressed-up alternative to jeans.', 'Easy stretch denim Classic five-pocket styling Back vent adds a bit of ease Modern, above-knee length Love denim, but need a slightly dressier option? Our jean skirt is it! The comfy stretch denim you love in our jeans, in a feminine, five-pocket style you''ll wear everywhere. 99% cotton/1% spandex.'),
(5, 'Short Sleeve Tipped Collar Stretch Mesh Polo Dress', 2, '50.00', 'polo-dress-tb.jpg', 'polo-dress.jpg', 'Throw it on and go.', 'Soft cotton pique with shape-keeping stretch A tipped collar and cuffs adds just a hint of interest Classic rib-knit collar and sleeve bands Dress has a slight A-line shape Small chest pocket Tennis tail hem is slightly longer in back; side vents add ease Falls to above the knee Dress it up or down, wear it anywhere. Classic polo styling with all the accents you''d expect (like a rib-knit collar) and a few surprises (like the accent pocket and tennis tail hem). 97% cotton/3% spandex.'),
(6, 'Sleeveless poplin dress', 2, '70.00', 'poplin-dress-tb.jpg', 'poplin-dress.jpg', 'Cool and classic.', 'Crisp-yet-soft poplin has a hint of stretch Button front lets you dress without mussing your hair Princess seams give it shape Flattering flared skirt Self-fabric belt is included White dress is fully lined; other colors unlined Falls to just below the knee It''s a dress that''ll sail right on through the day - layered under a sweater on a cool morning, by itself in the warmth of the afternoon. And it?ll flatter you all the way with its princess silhouette. Best of all, you know this classic dress will never go out of style. 97% cotton/3% spandex.'),
(7, 'Sleeveless drapey ponte sheath dress', 2, '80.00', 'sheath-dress-tb.jpg', 'sheath-dress.jpg', 'Dress perfection.', 'Fluid ponte knit drapes softly over your curves Princess seams give it shape. Tiered flare skirt is flattering and forgiving. Falls to just above the knee. The beauty of a ponte dress is that it will flatter in every season. Wear it solo when it''s warm (sleeveless styling''s a natural for that), then layer it under a jacket or sweater for cool-weather wear. 73% polyester/21% rayon/6% spandex.'),
(8, 'Smockback dress', 2, '70.00', 'smockback-tb.jpg', 'smockback.jpg', 'Fun and flirty.', 'Soft blend of linen and cotton Youthful tiered silhouette Elasticized smocking snugs the bodice for a smooth, comfortable fit Handy side pockets Falls to mid calf The tiered silhouette definitely has a boho vibe to it. And yet, it managed not to fall over into hippie territory. The fabric''s a blend of linen and cotton - cool, but not as likely to rumple as either fiber would be alone. The smocking''s in the back, where it snugs the dress just a tad so it fits smoothly all around. Thoughtful touches include a full lining, so you won''t have to search for the right slip. 53% linen/47% cotton.'),
(9, 'Starfish stretch crop pants', 3, '50.00', 'stretch-crop-pants-tb.jpg', 'stretch-crop-pants.jpg', 'Cool, comfortable - and slimming!', 'Soft cotton jersey with stretch for ease. Cropped style is right for warmer weather Wide elastic waistband lies flat and smooth Invisible zip pocket at the waist is just the size of a credit card They just might be the most refined knit crops you''ve ever worn - not to mention the most comfortable! Soft, shape-keeping fabric actually makes you look slimmer. A wide, full-elastic waistband is designed to lie flat and smooth. And there''s a zip pocket just right for carrying a credit card or ID. 89% cotton/11% spandex.'),
(10, 'Starfish Cotton Spandex Terry Pants', 3, '65.00', 'terry-pants-tb.jpg', 'terry-pants.jpg', 'You''ll want to live in these.', 'French terry is a soft blend of cotton and rayon-modal Wide rib-knit waistband has a drawstring to adjust the fit. Front pockets are stitched down, so they lie flat. Figure-balancing straight legs Everything about them is easy. From the sink-in soft French terry fabric to the rib-knit waistband to the straight-leg silhouette. Once you put them on, you''ll want to live in them. 57% cotton/38% rayon-modal/5% spandex. '),
(12, 'Diamond quilted down vest', 4, '50.00', 'quilted-down-vest-tb.jpg', 'quilted-down-vest.jpg', 'Lightweight layering with a style all her own.', 'Wind-resistant nylon with water-repellent DriOff finish. Warm 600-fill power down insulation Princess seams add shape through the waist Snap front with storm flap for extra protection. Two side pockets Falls at high hip Our Down Vest brings feminine flair to a classic. It''s styled with a trimmer silhouette to add shape through the waist. And the diamond quilt design gives it a modern twist. On the functional side, it doesn''t get any more versatile than this. Layer it over or under throughout the seasons for guaranteed warmth, thanks to the 600-fill power insulation. It''s so lightweight, if it wasn''t for all the compliments, you might even forget you''re wearing it. '),
(13, 'Modern double-breasted rain trench coat', 4, '190.00', 'trench-coat-tb.jpg', 'trench-coat.jpg', 'Stylish protection to weather the ever-changing forecast.', 'Soft cotton blend with a water-resistant finish to keep you dry Button-out liner provides added warmth. Removable throat latch helps block wind, cold. Pass-through pockets allow easy access inside Wear belted or not - your choice.&nbsp;<div><br></div><div><font face="arial">Whether it''s worn everyday or on dressier occasions, the water-resistant shell protects against rain and wet. And with its refined styling you''re guaranteed to look great as you brave the elements. Our version features a classic double-breasted front with gun patch detail, epaulets on the shoulders and a belt detail at the cuffs. Neat topstitching throughout lends a clean finish.&nbsp;</font></div><div><font face="arial"><br></font></div><div><font face="arial">Shell is 57% cotton/43% polyester, lining is 100% polyester. </font></div>'),
(14, 'Luxe insulator coat', 4, '200.00', 'insulator-coat-tb.jpg', 'insulator-coat.jpg', 'Our warmest insulator with a passion for fashion.', '180-gram insulation provides cozy warmth Zip/snap front with interior storm flap to block wind Hood and faux fur trim can be detached, if desired Adjustable hood with snap closure at the collar for added protection Handy two-way zipper for venting, movement Removable belt lets you decide how to wear it Above knee This coat is so warm, you could easily mistake it for down. The substantial 180-gram insulation has great warming power. And the water-resistant shell stops snow and wet from soaking in. Adjustable snaps on the sleeves and inner fleece cuffs help seal out cold. Best of all, this superior weather protection is encompassed in a sleek silhouette to keep you looking great as you face winter. Our coat features shaping princess seams, a tie belt for accessorizing options and removable hood and faux fur trim. Flapped pockets have dual side entry, plus a special compartment to hold a handwarmer packet. Inside zip pocket with cord port stores an MP3 player. Shell is 87% polyester/13% n'),
(15, 'Straw market tote bag', 5, '180.00', 'tote-bag-tb.jpg', 'tote-bag.jpg', 'Sturdy. Stylish. Sized just right.', 'Expertly crafted natural straw shell Rich latigo leather trim Wear-resistant polyester lining Soft rope handles with leather grips Attached decorative leather tassel Antique brass finish metal tassel cap, turn lock, studs. "Wow, what a great tote!" That''s just one of the compliments we heard when we paraded this tote past our colleagues here at the office. We really weren''t surprised. It''s well made. Especially good looking. And roomy. Easily accommodates beach and picnic goodies, weekend getaway gear, market shopping must-haves and more. Get one soon to tote your stuff. When you do, you could hear compliments too.'),
(16, 'Leather single perforated belt', 5, '60.00', 'perforated-belt-tb.jpg', 'perforated-belt.jpg', 'Simple yet stunning.', 'Long-lasting, full-grain leather Antiqued brass buckle Full-length center row perforations Spot-on contrast topstitching 1-inch wide strap Want proof that "less is more?" Take a look at this outstanding belt. Its simple row of centered perforations and contrast topstitching really make it pop. It''s easy to picture this belt dressed up or down, waking up sleepy outfits. Made in Canada.'),
(17, 'Wide brim straw hat', 5, '60.00', 'straw-hat-tb.jpg', 'straw-hat.jpg', 'To the beach and beyond.', '100% straw Straw cord hat band 1 1/4"-wide elastic sweatband 4 1/4"-wide brim Classic style keeps harmful UV rays off face and neck on sunny days. And unlike some, this hat is flexible so it will stow in a tote. Has an elasticized sweatband and straw cord hat band. Imported. Spot clean.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
