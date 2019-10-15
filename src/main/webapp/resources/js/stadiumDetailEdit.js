/**
 * 
 */

// 이미지 프리뷰
$(function() {
    function maskImgs() {
    	$.each($(".img-wrapper img"), function(index, img) {
	    	var src = $(img).attr("src");
	        var parent = $(img).parent();
	        parent.css("background", "url(" + src + ") no-repeat center center").css("background-size", "cover");
	        $(img).remove();
	    });
    }

    var preview = {
        init: function() {
            preview.setPreviewImg();
            preview.listenInput();
        },
        setPreviewImg: function(fileInput) {
            var path = $(fileInput).val();
            var uploadText = $(fileInput).siblings(".file-upload-text");

            if (!path) {
                $(uploadText).val("");
            } else {
            	if($("#fileImage1") != null || $("#fileImage1") != "") {
            		path = path.replace(/^C:\\fakepath\\/, "/uploadStorage/image1/");
            	} else if($("#fileImage2") != null || $("#fileImage2") != "") {
            		path = path.replace(/^C:\\fakepath\\/, "/uploadStorage/image2/");
            	} else if($("#fileImage3") != null || $("#fileImage3") != "") {
            		path = path.replace(/^C:\\fakepath\\/, "/uploadStorage/image3/");
            	}
               
                $(uploadText).val(path);

                preview.showPreview(fileInput, path, uploadText);
            }
        },
        showPreview: function(fileInput, path, uploadText) {
            var file = $(fileInput)[0].files;

            if (file && file[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    var previewImg = $(fileInput).parents(".file-upload-wrapper").siblings(".preview");
                    var img = $(previewImg).find("img");

                    if (img.length == 0) {
                        $(previewImg).html('<img src="' + e.target.result + '" alt=""/>');
                    } else {
                        img.attr("src", e.target.result);
                    }
                	
                    uploadText.val(path);
                    maskImgs();
                };

                reader.onloadstart = function() {
                    $(uploadText).val("uploading..");
                };

                reader.readAsDataURL(file[0]);
            }
        },
        listenInput: function() {
            $(".file-upload-native").on("change", function() {
            	var area = $(this).parents(".file-upload-wrapper").siblings(".preview");
            	area.show();
                preview.setPreviewImg(this);
            });
        }
    };
    preview.init();
});