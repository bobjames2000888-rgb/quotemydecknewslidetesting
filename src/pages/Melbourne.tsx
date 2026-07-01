import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Star, Clock, Phone, ChevronDown, ChevronUp } from "lucide-react";
import SuburbLink from "@/components/SuburbLink";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const Melbourne = () => {
  useDocumentTitle("Melbourne Decking Quotes — Get 3 Free Quotes in Minutes");
  const [showAllSuburbs, setShowAllSuburbs] = useState(false);
  const handleQuoteClick = () => {
    window.history.pushState({}, "", QUOTE_URL); window.dispatchEvent(new PopStateEvent("popstate"));
  };
  const suburbs = ["Carlton", "Docklands", "East Melbourne", "Flemington", "Kensington", "Melbourne", "North Melbourne", "Parkville", "West Melbourne", "Albert Park", "Balaclava", "Elwood", "Middle Park", "Ripponlea", "St Kilda", "St Kilda West"];
  const allSuburbs = ["Alphington", "Beaconsfield", "Brighton East", "Brooklyn", "Bundoora", "Burwood", "Carlton North", "Cheltenham", "Coburg", "Coburg North", "Diggers Rest", "Eltham", "Eltham North", "Emerald", "Eynesbury", "Fairfield", "Glen Iris", "Greensborough", "Highett", "Hillside", "Keilor East", "Kilsyth", "Laverton", "Lyndhurst", "Macleod", "Menzies Creek", "Mont Albert North", "Mount Cottrell", "Park Orchards", "Port Melbourne", "Ringwood North", "Sassafras", "South Wharf", "South Yarra", "Southbank", "St Kilda East", "Surrey Hills", "Truganina", "Tullamarine", "Upper Ferntree Gully", "Vermont", "Wonga Park", "South Melbourne", "Abbotsford", "Burnley", "Clifton Hill", "Collingwood", "Cremorne", "Fitzroy", "Fitzroy North", "Princes Hill", "Richmond", "Bellfield", "Briar Hill", "Eaglemont", "Heidelberg", "Heidelberg Heights", "Heidelberg West", "Ivanhoe", "Ivanhoe East", "Lower Plenty", "Montmorency", "Rosanna", "St Helena", "Viewbank", "Watsonia", "Watsonia North", "Yallambie", "Kingsbury", "Northcote", "Preston", "Reservoir", "Thornbury", "Attwood", "Broadmeadows", "Campbellfield", "Coolaroo", "Craigieburn", "Dallas", "Gladstone Park", "Greenvale", "Jacana", "Kalkallo", "Keilor", "Meadow Heights", "Melbourne Airport", "Mickleham", "Roxburgh Park", "Somerton", "Sunbury", "Westmeadows", "Bulla", "Clarkefield", "Oaklands Junction", "Wildwood", "Yuroke", "Brunswick", "Brunswick East", "Brunswick West", "Fawkner", "Glenroy", "Gowanbrae", "Hadfield", "Oak Park", "Pascoe Vale", "Pascoe Vale South", "Diamond Creek", "Doreen", "Hurstbridge", "North Warrandyte", "Plenty", "Research", "Wattle Glen", "Arthurs Creek", "Bend of Islands", "Christmas Hills", "Cottles Bridge", "Kangaroo Ground", "Kinglake", "Kinglake West", "Nutfield", "Panton Hill", "St Andrews", "Smiths Gully", "Strathewen", "Watsons Creek", "Yan Yean", "Yarrambat", "Donnybrook", "Epping", "Lalor", "Mernda", "Mill Park", "South Morang", "Thomastown", "Wollert", "Beveridge", "Eden Park", "Humevale", "Whittlesea", "Woodstock", "Ashburton", "Balwyn", "Balwyn North", "Camberwell", "Canterbury", "Deepdene", "Hawthorn", "Hawthorn East", "Kew", "Kew East", "Mont Albert", "Bayswater", "Boronia", "Ferntree Gully", "Knoxfield", "Lysterfield", "Rowville", "Scoresby", "The Basin", "Wantirna", "Wantirna South", "Bulleen", "Doncaster", "Doncaster East", "Donvale", "Nunawading", "Templestowe", "Templestowe Lower", "Warrandyte", "Warrandyte South", "Bayswater North", "Croydon", "Croydon Hills", "Croydon North", "Croydon South", "Heathmont", "Kilsyth South", "Ringwood", "Ringwood East", "Warranwood", "Blackburn", "Blackburn North", "Blackburn South", "Box Hill", "Box Hill North", "Box Hill South", "Burwood East", "Forest Hill", "Mitcham", "Vermont South", "Belgrave", "Belgrave Heights", "Belgrave South", "Chirnside Park", "Lilydale", "Montrose", "Mooroolbark", "Mount Evelyn", "Selby", "Tecoma", "Upwey", "Badger Creek", "Beenak", "Big Pats Creek", "Cambarville", "Chum Creek", "Coldstream", "Dixons Creek", "Don Valley", "East Warburton", "Fernshaw", "Ferny Creek", "Gilderoy", "Gladysdale", "Gruyere", "Healesville", "Hoddles Creek", "Kallista", "Kalorama", "Launching Place", "Macclesfield", "Matlock", "McMahons Creek", "Millgrove", "Monbulk", "Mount Dandenong", "Mount Toolebewong", "Narre Warren East", "Olinda", "Powelltown", "Reefton", "Seville", "Seville East", "Sherbrooke", "Silvan", "Steels Creek", "Tarrawarra", "The Patch", "Three Bridges", "Toolangi", "Toorongo", "Tremont", "Wandin East", "Wandin North", "Warburton", "Wesburn", "Woori Yallock", "Yarra Glen", "Yarra Junction", "Yellingbo", "Yering", "Beaumaris", "Black Rock", "Brighton", "Hampton", "Hampton East", "Sandringham", "Officer", "Pakenham", "Avonsleigh", "Bayles", "Beaconsfield Upper", "Bunyip", "Bunyip North", "Caldermeade", "Cardinia", "Catani", "Clematis", "Cockatoo", "Cora Lynn", "Dalmore", "Dewhurst", "Garfield", "Garfield North", "Gembrook", "Guys Hill", "Heath Hill", "Iona", "Koo Wee Rup", "Koo Wee Rup North", "Lang Lang", "Lang Lang East", "Longwarry", "Maryknoll", "Modella", "Monomeith", "Mount Burnett", "Nangana", "Nar Nar Goon", "Nar Nar Goon North", "Nyora", "Officer South", "Pakenham South", "Pakenham Upper", "Rythdale", "Tonimbuk", "Tynong", "Tynong North", "Vervale", "Yannathan", "Berwick", "Botanic Ridge", "Clyde", "Clyde North", "Cranbourne", "Cranbourne East", "Cranbourne North", "Cranbourne West", "Cranbourne South", "Doveton", "Endeavour Hills", "Eumemmerring", "Hallam", "Hampton Park", "Junction Village", "Lynbrook", "Narre Warren", "Narre Warren North", "Narre Warren South", "Blind Bight", "Cannons Creek", "Devon Meadows", "Harkaway", "Lysterfield South", "Pearcedale", "Tooradin", "Warneet", "Dandenong", "Dandenong North", "Dandenong South", "Keysborough", "Noble Park", "Noble Park North", "Springvale", "Springvale South", "Bangholme", "Carrum Downs", "Frankston", "Frankston North", "Frankston South", "Langwarrin", "Sandhurst", "Seaford", "Skye", "Langwarrin South", "Bentleigh", "Bentleigh East", "Carnegie", "Caulfield", "Caulfield East", "Caulfield North", "Caulfield South", "Elsternwick", "Gardenvale", "Glen Huntly", "McKinnon", "Murrumbeena", "Ormond", "Aspendale", "Aspendale Gardens", "Bonbeach", "Braeside", "Carrum", "Chelsea", "Chelsea Heights", "Clarinda", "Clayton South", "Dingley Village", "Edithvale", "Heatherton", "Mentone", "Moorabbin", "Moorabbin Airport", "Mordialloc", "Parkdale", "Patterson Lakes", "Waterways", "Ashwood", "Chadstone", "Clayton", "Glen Waverley", "Hughesdale", "Huntingdale", "Mount Waverley", "Mulgrave", "Notting Hill", "Oakleigh", "Oakleigh East", "Oakleigh South", "Wheelers Hill", "Blairgowrie", "Capel Sound", "Dromana", "McCrae", "Mornington", "Mount Eliza", "Mount Martha", "Portsea", "Rosebud", "Rye", "Safety Beach", "Sorrento", "Tootgarook", "Arthurs Seat", "Balnarring", "Balnarring Beach", "Baxter", "Bittern", "Boneo", "Cape Schanck", "Crib Point", "Fingal", "Flinders", "Hastings", "Main Ridge", "Merricks", "Merricks Beach", "Merricks North", "Moorooduc", "Point Leo", "Red Hill", "Red Hill South", "Shoreham", "Somers", "Somerville", "St Andrews Beach", "Tuerong", "Tyabb", "HMAS Cerberus", "Armadale", "Kooyong", "Malvern", "Malvern East", "Prahran", "Toorak", "Windsor", "Albanvale", "Albion", "Ardeer", "Cairnlea", "Calder Park", "Deer Park", "Delahey", "Derrimut", "Kealba", "Keilor Downs", "Keilor Lodge", "Keilor North", "Keilor Park", "Kings Park", "St Albans", "Sunshine", "Sunshine North", "Sunshine West", "Sydenham", "Taylors Lakes", "Altona", "Altona Meadows", "Altona North", "Newport", "Seabrook", "Seaholme", "South Kingsville", "Spotswood", "Williamstown", "Williamstown North", "Braybrook", "Footscray", "Kingsville", "Maidstone", "Maribyrnong", "Seddon", "Tottenham", "West Footscray", "Yarraville", "Aintree", "Bonnie Brook", "Brookfield", "Burnside", "Burnside Heights", "Caroline Springs", "Cobblebank", "Deanside", "Fieldstone", "Fraser Rise", "Grangefields", "Harkness", "Kurunjang", "Melton", "Melton South", "Melton West", "Plumpton", "Ravenhall", "Rockbank", "Strathtulloh", "Taylors Hill", "Thornhill Park", "Weir Views", "Exford", "Parwan", "Toolern Vale", "Aberfeldie", "Airport West", "Ascot Vale", "Avondale Heights", "Essendon", "Essendon Fields", "Essendon North", "Essendon West", "Moonee Ponds", "Niddrie", "Strathmore", "Strathmore Heights", "Travancore", "Hoppers Crossing", "Laverton North", "Mambourin", "Manor Lakes", "Point Cook", "Tarneit", "Werribee", "Werribee South", "Williams Landing", "Wyndham Vale", "Cocoroc", "Little River", "Quandong"];

  const getSuburbPath = (suburb: string) => {
    const suburbLower = suburb.toLowerCase();
    const suburbRoutes: Record<string, string> = {
      "pakenham": "/vic/pakenham-decking",
      "portsea": "/vic/portsea-decking",
      "sorrento": "/vic/sorrento-decking",
      "mount martha": "/vic/mount-martha-decking",
      "langwarrin": "/vic/langwarrin-decking",
      "frankston": "/vic/frankston-decking",
      "carrum downs": "/vic/carrum-downs-decking",
      "mornington": "/vic/mornington-decking",
      "rosebud": "/vic/rosebud-decking",
      "mount eliza": "/vic/mount-eliza-decking",
      "cranbourne": "/vic/cranbourne-decking",
      "berwick": "/vic/berwick-decking",
      "narre warren": "/vic/narre-warren-decking",
      "officer": "/vic/officer-decking",
      "botanic ridge": "/vic/botanic-ridge-decking",
      "lynbrook": "/vic/lynbrook-decking",
      "ringwood": "/vic/ringwood-decking",
      "lilydale": "/vic/lilydale-decking",
      "rowville": "/vic/rowville-decking",
      "croydon": "/vic/croydon-decking",
      "box hill": "/vic/box-hill-decking",
      "toorak": "/vic/toorak-decking",
      "glen waverley": "/vic/glen-waverley-decking",
      "richmond": "/vic/richmond-decking",
      "south yarra": "/vic/south-yarra-decking",
      "doncaster": "/vic/doncaster-decking",
      "st kilda": "/vic/st-kilda-decking",
      "mount waverley": "/vic/mount-waverley-decking",
      "carlton": "/vic/carlton-decking",
      "dandenong": "/vic/dandenong-decking",
      "bayswater": "/vic/bayswater-decking",
      "clayton": "/vic/clayton-decking",
      "wantirna": "/vic/wantirna-decking",
      "ferntree gully": "/vic/ferntree-gully-decking",
      "seaford": "/vic/seaford-decking",
      "clyde": "/vic/clyde-decking",
      "boronia": "/vic/boronia-decking",
      "wheelers hill": "/vic/wheelers-hill-decking",
      "springvale": "/vic/springvale-decking",
      "templestowe": "/vic/templestowe-decking",
      "ashwood": "/vic/ashwood-decking",
      "hampton park": "/vic/hampton-park-decking",
      "mooroolbark": "/vic/mooroolbark-decking",
      "kilsyth": "/vic/kilsyth-decking",
      "burwood": "/vic/burwood-decking",
      "endeavour hills": "/vic/endeavour-hills-decking",
      "keysborough": "/vic/keysborough-decking",
      "somerville": "/vic/somerville-decking",
      "blackburn": "/vic/blackburn-decking",
      "noble park": "/vic/noble-park-decking",
      "balwyn": "/vic/balwyn-decking",
      "chirnside park": "/vic/chirnside-park-decking",
      "scoresby": "/vic/scoresby-decking",
      "hallam": "/vic/hallam-decking",
      "mulgrave": "/vic/mulgrave-decking",
      "beaconsfield": "/vic/beaconsfield-decking",
      "chelsea": "/vic/chelsea-decking",
      "nunawading": "/vic/nunawading-decking",
      "rye": "/vic/rye-decking",
      "mitcham": "/vic/mitcham-decking",
      "dromana": "/vic/dromana-decking",
      "hastings": "/vic/hastings-decking",
      "heathmont": "/vic/heathmont-decking",
      "knoxfield": "/vic/knoxfield-decking",
      "skye": "/vic/skye-decking",
      "montrose": "/vic/montrose-decking",
      "warranwood": "/vic/warranwood-decking",
      "the basin": "/vic/the-basin-decking",
      "safety beach": "/vic/safety-beach-decking",
      "wonga park": "/vic/wonga-park-decking",
      "lyndhurst": "/vic/lyndhurst-decking",
      "mentone": "/vic/mentone-decking",
    };
    return suburbRoutes[suburbLower] || "/melbourne";
  };
  const stats = [{
    icon: Users,
    label: "Decks Quoted",
    value: "2,800+"
  }, {
    icon: Star,
    label: "Average Rating",
    value: "4.7/5"
  }, {
    icon: Clock,
    label: "Years Experience",
    value: "15+"
  }, {
    icon: MapPin,
    label: "Suburbs Serviced",
    value: "580+"
  }];
  const recentProjects = [{
    suburb: "Richmond",
    type: "Timber Deck",
    rating: 5,
    review: "Very happy with the service provided. The installers were on time and the quality of the deck is excellent."
  }, {
    suburb: "St Kilda",
    type: "Composite Deck",
    rating: 5,
    review: "High standards from start to finish and pricing that makes sense. Definitely worth choosing."
  }, {
    suburb: "Brunswick",
    type: "Pool Deck",
    rating: 5,
    review: "Couldn't be happier with the outcome. The deck is beautiful and the support throughout was excellent."
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Servicing All Melbourne Suburbs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Melbourne's Most Trusted
              <br />
              <span className="text-gradient">Decking Specialists</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Professional decking installation and repair services across Greater Melbourne. Local tradies, trusted by 2,800+ Melbourne homeowners.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                Get Free Melbourne Quotes
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:0481752344" aria-label="Call 0481 752 344">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0481 752 344
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => <Card key={index} className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Service All Melbourne Suburbs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the Mornington Peninsula to the Dandenongs, we've got Melbourne covered
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {suburbs.map((suburb, index) => (
              <SuburbLink key={index} suburb={suburb} cityPath={getSuburbPath(suburb)} />
            ))}
          </div>
          
          {showAllSuburbs && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {allSuburbs.map((suburb, index) => (
                <SuburbLink key={index} suburb={suburb} cityPath={getSuburbPath(suburb)} />
              ))}
            </div>
          )}
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see your suburb? We service the entire Greater Melbourne area!</p>
            <Button variant="outline" onClick={() => setShowAllSuburbs(!showAllSuburbs)}>
              {showAllSuburbs ? <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Hide Suburbs
                </> : <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  View All Suburbs
                </>}
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Melbourne Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See what your neighbours are saying about their decking projects</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">{project.suburb}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.type}</p>
                  <p className="text-sm text-foreground italic">"{project.review}"</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Melbourne Homeowners Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Local Melbourne Experts</h3>
                    <p className="text-muted-foreground text-sm">Local deck builders understand Melbourne's unique weather, council requirements, and local styles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fast Response Times</h3>
                    <p className="text-muted-foreground text-sm">Same-day quotes and flexible scheduling to suit your Melbourne lifestyle</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality</h3>
                    <p className="text-muted-foreground text-sm">Local expert deck builders on all installations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img alt="Melbourne Decking Projects" className="w-full h-full object-cover" src="/lovable-uploads/44029f16-3161-4138-a651-53190199f13e.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Melbourne Deck Built?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Join 1,000's of happy Melbourne homeowners. Get your free quotes in 60 seconds.</p>
            <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get Free Melbourne Quotes</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Melbourne;
