# GIS data of Keller et al. 2019 PNAS
## Ancient Yersinia pestis genomes from across Western Europe reveal early diversification during the First Pandemic (541–750)
(https://doi.org/10.1073/pnas.1820447116)

_The GIS data from the study are offered both as a geopackage and as ESRI shapefiles and a project file. The project file contains also the layout parameters to create a maps similar to the figures of the study. An interactive web map can be found [here](https://qgiscloud.com/marcelkeller/First_Pandemic_cloud). You can find additional information for features (e.g. years of outbreaks) by clicking on the map. This information can also be found in the attribute tables of the respective files._

## The files contain the following layers:

### First Pandemic positive sites
All sites with _palaeogenomic_ evidence for _Y. pestis_. Please note that this does not include sites tested positive in PCR studies. Previously published sites (Altenerding and Aschheim) are not highlighted as in the study. Precision of coordinates might be limited to the modern municipality and not to the exact location of the site.

Attributes:
- Site name: as displayed in the map
- Alternative site name
- Number of positive individuals (please note that number of positive samples might be higher)
- Number of tested individuals (please note that number of tested samples might be higher)
- Lab IDs of positive individuals
- Archaeological IDs of positive individuals
- Radiocarbon date uncalibrated (see comment for details)
- Radiocarbon date standard deviation
- cal. RC 2sigma lower threshold
- cal. RC 2sigma upper threshold
- Archaeological dating lower threshold
- Archaeological dating upper threshold
- Latitude (decimal)
- Longitude (decimal)
- Publication
- DOI-Link
- Comment
- Year start TM: for time manager mode (archaeological) in QGIS in 0000 AD format, based on archaeological date, 541 AD (begin of the First Pandemic) as cutoff
- Year end TM: for time manager mode (archaeological) in QGIS in 0000 AD format, based on archaeological date, 750 AD (end of the First Pandemic) as cutoff


### First Pandemic negative sites
All sites tested negative in Keller et al. 2019. Please note that this does not include negatively tested sites of other studies. In contrast to Fig. S9 in the paper, the sites are not distinguished by their dating (Pre/Post-Justinianic) - some of them date before the begin or after the end of the First Pandemic as historically documented. Precision of coordinates might be limited to the modern municipality and not to the exact location of the site.

Attributes:
- Site name: as displayed in the map
- Alternative site name
- Number of tested individuals (please note that number of tested samples might be higher)
- Archaeological dating lower threshold
- Archaeological dating upper threshold
- Latitude (decimal)
- Longitude (decimal)
- Publication
- DOI-Link

### Outbreaks cities
Precision of coordinates might be limited to the modern municipality and not to the exact location of the Late Antique/Early Medieval city. Please note that the __sources are given for all outbreaks of the respective year__ (see [here](https://github.com/marcel-keller/Plague_GIS/blob/master/First_Pandemic/Sources.md)) and not only for the respective city. For the last wave, a common end of the pandemic in 750 AD is assumed.

Attributes:
- Name
- Year start
- Year end
- Latitude (decimal)
- Longitude (decimal)
- Sources
- Year start TM: for time manager mode (archaeological) in QGIS in 0000 AD format
- Year end TM: for time manager mode (archaeological) in QGIS in 0000 AD format

### Outbreaks regions
Primarily based on the _Digital Atlas of Roman and Medieval Civilizations_ (DARMC; https://darmc.harvard.edu) maps “Provinces AD303–324” for Western Europe and “Provinces ca. AD500” for Eastern Europe, Middle East and Africa. Please note that the __sources are given for all outbreaks of the respective year__ (see SI) and not only for the respective region. For the last wave, a common end of the pandemic in 750 AD is assumed.

- Name
- Year start
- Year end
- Sources
- Year start TM: for time manager mode (archaeological) in QGIS in 0000 AD format
- Year end TM: for time manager mode (archaeological) in QGIS in 0000 AD format

### France frame
Frame for inset in Fig. 1.

### France rivers
Taken from Natural Earth (ne_10m_river_lake_centerlines, http://www.naturalearthdata.com), based on data provided by the European Commission, Joint Research Centre, Institute for Environment and Sustainability (JRC IES).

### Bavaria frame
Frame for Fig. S9.

### Bavaria roads
Combined from a georeferenced map by Rettner and Steidl (published in: Wamser L (2010) Karfunkelstein und Seide. Neue Schätze aus Bayerns Frühzeit (Pustet, Regensburg) and the DARMC map “Roman Roads” (https://darmc.harvard.edu).

### Bavaria provinces
Based on a georeferenced map by Rettner and Steidl (published in: Wamser L (2010) Karfunkelstein und Seide. Neue Schätze aus Bayerns Frühzeit (Pustet, Regensburg).

### Bavaria rivers
Taken from Natural Earth (ne_10m_river_lake_centerlines, http://www.naturalearthdata.com), based on data provided by the European Commission, Joint Research Centre, Institute for Environment and Sustainability (JRC IES).
