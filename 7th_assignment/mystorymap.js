// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1963-2017",
      text: {
        headline: "My footprints",
        text: "<p>In past seven years, I stayed in three different cities. They are all big cities of China, but all have their different loveliness. </p>"
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509298560164&di=d6c84badd9ee99c7ac1eae823ea4ad14&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2652294634%2C678749122%26fm%3D214%26gp%3D0.jpg",
        credit: "",
        caption: ""
      }
    }, {
      date: "2005",
      text: {
        headline: "NO.1 Middle School Affiliated to Central China Normal University",
        text: "<p> This is my high school, which is located in Wuhan. I spent three cherished years there.</p>"
      },
      location: {
        name: "",
        icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509341001849&di=2052032923467d151371981c37ea6792&imgtype=0&src=http%3A%2F%2Fwww.huyids.com%2FimageRepository%2Fb7313942-c9eb-4788-aca0-9c2add75f950.jpg",
        lat: 30.4580330000,
        lon: 114.3959980000,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509341001849&di=2052032923467d151371981c37ea6792&imgtype=0&src=http%3A%2F%2Fwww.huyids.com%2FimageRepository%2Fb7313942-c9eb-4788-aca0-9c2add75f950.jpg",
        type:     "image",
        credit: "",
        caption: ""
      }
    }, {
      date: "2005",
      text: {
        headline: "Shanghai University",
        text: "<p> I majored in advertising in Shanghai University, which is located in Shanghai, Baoshan District.</p>"
      },
      location: {
        name: "",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 31.278248267116,
        lon: 121.45166873931794,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509305038342&di=fcbf1f735c933b94e00e15713a771b7e&imgtype=0&src=http%3A%2F%2Fpic.people.com.cn%2Fmediafile%2F200912%2F17%2FF200912171723178821472228.jpg",
        type: 		"image",
        credit: "",
        caption: ""
      }
    }, {
      date: "1965",
      text: {
        headline: "Chinese University of HongKong",
        text: "<p> I come here this year for my master courses, and I majored in New Media.</p> "
      },
      location: {
        name: "CUHK New Asia College",
        lat: 22.4210,
        lon: 114.2090,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509341217421&di=4ec7c01b879f5878513979df582e550b&imgtype=0&src=http%3A%2F%2Fimg1.szhk.com%2FImage%2F2016%2F03%2F04%2F1457062558845.png",
        credit: "",
        caption: ""
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}