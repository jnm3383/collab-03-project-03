const youtubeVideos = [
    {
        publishDate: "2023-08-18",
        videoLength: "01:59",
        videoDescription: "Working together to bring unity and put aside differences",
        videoTitle: "Need for Unity In Afghanistan",
        languages: ["English"],
        videoURL: "https://www.youtube.com/watch?v=LANxXWKWdsc&t=23s&ab_channel=TheRUGProjectatUTA",
        views: 56,
    },
    {
        publishDate: "2023-08-18",
        videoLength: "02:49",
        videoTitle: "The perils of of an uncertain future",
        videoDescription: "Mary Akrami shares her feelings of sadness and uncertainty as refugee Afghan Women’s Oral History",
        languages: ["English"],
        videoURL: "https://youtu.be/RhjugcDK9DU?si=vWzmPTc9N1mZoKLy",
        views: 16,
    },
    {
        publishDate: "2022-08-05",
        videoLength: "02:08",
        videoTitle: "When will the world intervene in Afghanistan?",
        videoDescription: "Robina Hamdard shares the need for global intervention in Afghanistan Afghan Women’s Oral History",
        languages: ["Dari","English"],
        videoURL: "https://youtu.be/-szDYn9bkZ0?si=8Hu5arIgz2xMxsi9",
        views: 28,
    },
    {
        publishDate: "2023-08-17",
        videoLength: "04:12",
        videoTitle: "Robina’s story of hope in the face of adversity",
        videoDescription: "When #womensrights activist Robina Hamdard left #Afghanistan, she knew that her advocacy work for would continue. She mobilized fellow #Afghanrefugees and launched an international effort to fight for the rights of #Afghan women. Here's more of Robina’s story.",
        languages: ["Dari","English"],
        videoURL:"https://youtu.be/zKD54QvoU7s?si=BgaaIsF8_8UBSEp1",
        views:24,
    },
    {
        publishDate: "2023-08-17",
        videoLength: "02:26",
        videoTitle: "Robina shares what life is like for women in Afghanistan",
        videoDescription: "#Afghanwomen have tirelessly worked to achieve many milestones and positions. The younger generation of women have earned bachelor’s and master’s degrees and strived to achieve leadership roles throughout Afghanistan’s government. But after the Taliban regime took power, these important milestones for Afghan women were erased.",
        languages: ["Dari","English"],
        videoURL:"https://youtu.be/Gi64OYJ5mh0?si=JZayUCK17kZzxNdc",
        views: 46,
    },
    {
        publishDate: "2023-08-16",
        videoLength: "01:02",
        videoTitle: "Shinkai reflects more on the fate of women in her beloved country.",
        videoDescription: "Women make up more than 49% of Afghanistan’s population, but under the Taliban’s rule #Afghanwomen have been denied employment opportunities and excluded from public service roles. So, nearly half of the population is not represented in government, cannot hold jobs, cannot be educated, or contribute to the country’s economic progress.",
        languages: ["English"],
        videoURL:"https://youtu.be/jfkMEyafzp8?si=i8nWcsmLbXj7kp7L",
        views: 14,
    },
    {
        publishDate: "2023-08-15",
        videoLength: "03:00",
        videoTitle: "Shinkai reflects on her refugee experience and her concern for a country in crisis",
        videoDescription: "Imagine being on a plane with no assurances as to where you will land. This was the reality for many women as they fled #Afghanistan during the second wave of Taliban rule. The worry of not knowing who will accept you and the sorrow felt for those you left behind. Shinkai, #womensrights activist and member of Parliament prior to the Taliban’s takeover, knows this feeling all too well.  Please watch and listen as Shinkai reflects on her refugee experience and her concern for a country in crisis.",
        languages: ["English"],
        videoURL: "https://youtu.be/r52tOMHPcE4?si=LvTc28IPAySZB0nU",
        views: 58,
    },
    {
        publishDate: "2023-08-15",
        videoLength: "01:37",
        videoTitle: "Mary Akrami shares that all women must stand together and be the voice for women in Afghanistan",
        videoDescription: "Women must stand for women's rights and stand up to the policies of the Taliban regime. Everyone struggles when they can't have access to the basic lives",
        languages: ["English"],
        videoURL: "https://youtu.be/JNXOfGDDtos?si=agptkhqyvrMk5GvP",
        views: 27,
    },
    {
        publishDate: "2023-08-15",
        videoLength: "01:08",
        videoTitle: "Mary shares her refugee experience and reflects on the plight of those who remain in Afghanistan",
        videoDescription: "For Mary Akrami, activism is a way of life. Her work centered around helping protect the rights of women in her native #Afghanistan and advocating for peace in a time when peace seems a fleeting ideal. As a director for Women Human Rights Defenders, a large network of women’s rights organizations, Mary supported like-minded colleagues by sharing their experiences in Afghanistan during the second wave of Taliban rule.",
        languages: ["English"],
        videoURL:"https://youtu.be/8JbtmV02R9I?si=AKbPJzre7U_fZ1Bb",
        views: 25,
    },
    {
        publishDate: "2022-03-30",
        videoLength: "12:40",
        videoTitle: "The RUG Project at the University of Texas at Arlington",
        videoDescription: "The RUG Project shares Afghanistan women refugees’ courageous stories. The research project elevates their voices as an act of defiance and recognizes their resilience, promotes global unity, and guides efforts for social change.",
        languages: ["English"],
        videoURL: "https://www.youtube.com/watch?v=LANxXWKWdsc&t=23s&ab_channel=TheRUGProjectatUTA",
        views: 449,
    }
];



const Utils = {
    displayVideos: function() {
        const videoLength = Utils.getSelectedVideoLength('input[name="videoLength"]');
        Utils.clearItemList();
        
        // just a quick reference to the list of videos above;
        let filteredVideos = youtubeVideos;
        
        /* TODO: Filter the videos based on the selected video length

        */
        
        filteredVideos.forEach(video => {
            const li = document.createElement('li');
            li.textContent = `${video.videoTitle} (Published on: ${video.publishDate})`;
            document.getElementById('itemListVideos').appendChild(li);
        });
    },

    clearItemList: function() {        
        const itemList = document.getElementById('itemListVideos');
        itemList.innerHTML = '';
    },

    getSelectedVideoLength: function(el) {
        const selectedRadio = document.querySelector(el + ':checked');
        return selectedRadio ? selectedRadio.value : null;
    },

    /* TODO: Define a method to determine the duration of a video
    - call this method getVideoDuration
    - this method will take in one paramater, the video
    - we only care about the minutes.
    - HINT: this should return a number, not a string

    */
    
    /* TODO: Define a method to filter videos based on their length
    - call this method filterByVideoLength
    - this method will take in two parameters, the list of videos and the video length
    - this method will return a list of videos that match the length criteria

    Note: this video will make use of the getselectedVideoLength, provided for you, and getVideoDuration, which you will be working on

    */



    
    /* TODO: Define a method to check if a video matches a certain length criteria
    - call this method matchesVideoLengthCriteria
    - this method will take in two parameters, the video length and the length criteria.
        - the video length comes from the youtubeVideos array and conveniently retrieved with the getSelectedVideoLength method
        - the length criteria is something that you will need to define yourself
        - you can take a look that the HTML for this. What is a short video? a medium video? a long video?
    
    - this method will return true if the video matches the length criteria, false otherwise

    - consider what type of conditional logic is best suited for this. There is a finite list.

    */
    
    displayAllVideos: function(el) {
        Utils.clearItemList();
        const itemList = document.querySelector(el);
        youtubeVideos.forEach(video => {
            const li = document.createElement('li');
            li.textContent = `${video.videoTitle} (Published on: ${video.publishDate})`;
            itemList.appendChild(li);
        });
    },
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[name="videoLength"]').forEach(radio => {
        radio.addEventListener('change', Utils.displayVideos);
    });

    Utils.displayAllVideos('#itemListVideos');
});


