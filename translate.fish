set original_sound_ratio 0.6
set temp_dir ./temp
set temp_video_dir $temp_dir/video
set temp_video "$temp_video_dir/%(title)s.%(ext)s"
set temp_audio $temp_dir/audio

set video_link $argv[1]

set arg_orig_sound_ratio $argv[2]

if test -n (echo $arg_orig_sound_ratio)
    set original_sound_ratio $arg_orig_sound_ratio
end
echo "original volume is set to $original_sound_ratio"


test -n (echo $video_link)

and mkdir $temp_dir
and mkdir $temp_video_dir
and mkdir $temp_audio

and yt-dlp -o $temp_video $video_link
and set video_full_name (ls $temp_video_dir)
and vot-cli $video_link --output $temp_audio
and ffmpeg \
    -i $temp_video_dir/* -i $temp_audio/* \
    -c:v copy \
    -filter_complex " \
        [0:a] volume=$original_sound_ratio [original];
        [original][1:a] amix=inputs=2:duration=longest [audio_out] \
    " \
    -map 0:v -map "[audio_out]" \
    -y $video_full_name

rm -r $temp_dir