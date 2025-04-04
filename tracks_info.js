let tracks = ['tracks/transequia-2024.gpx', 
              'tracks/monistrol-de-calders-mitja-del-sot-2024.gpx', 
              'tracks/puigpedros-2-915m.gpx', 
              'tracks/monte-rosa-amb-el-gemi-10-11-09-23.gpx', 
              'tracks/ibon-i-pic-de-bernatuara.gpx', 
              'tracks/foradada-munt-de-montsonis.gpx', 
              'tracks/forquetes-forau-de-la-neu-i-posets.gpx', 
              'tracks/la-figuerassa-i-queralt-31-05-24.gpx', 
              'tracks/moia-collsuspina-roc-gros.gpx', 
              'tracks/48ena-travessa-moia-franca-2024.gpx', 
              'tracks/molieres-3009m.gpx', 
              'tracks/volta-al-cap-de-creus-03-08-24.gpx', 
              'tracks/lolla-de-nuria.gpx', 
              'tracks/balandrau-2585-i-puig-cerveris-2207-22-06-24.gpx', 
              'tracks/coll-de-jou-i-via-verda-del-ferro-i-el-carbo.gpx', 
              'tracks/aneto-3404m.gpx', 
              'tracks/mulhacen.gpx', 
              'tracks/mils-del-moianes.gpx', 
              'tracks/33a-pedala-pedala-sta-eulalia-de-riuprimer-2024.gpx', 
              'tracks/ruta-circular-glaceres-de-la-vanoise.gpx', 
              'tracks/estels-del-sud-4-8-12-22.gpx', 
              'tracks/volta-a-montserrat-21-07-24.gpx', 
              'tracks/el-castell-de-verdera.gpx', 
              'tracks/canon-de-anisco.gpx', 
              'tracks/moia-riuprimer-vic-muntanyola-collsuspina.gpx', 
              'tracks/senda-de-los-cazadores-cola-de-caballo.gpx', 
              'tracks/moia-calders-monistrol-granera-castelltercol-castellcir-coll.gpx', 
              'tracks/st-sadurni-de-gallifa.gpx',
              'tracks/puig-cornador.gpx',
              'tracks/pic-de-cabirolera-i-vulturo.gpx',
              'tracks/matagalls-des-de-collformic.gpx',
              'tracks/rocacorba.gpx',
              'tracks/puiggracios-cingles-de-berti-la-trona.gpx',
              'tracks/moia-castell-de-la-popa.gpx',
              'tracks/castell-de-sant-miquel-girona.gpx',
              'tracks/tagamanent.gpx',
              'tracks/penyes-altes-del-moixero.gpx',
              'tracks/st-aniol-finestres-roca-del-castell-puigsallanca.gpx',
              'tracks/gallina-pelada.gpx',
              'tracks/pica-destats.gpx',
              'tracks/santuari-de-corbera-cogullo-destela.gpx',
              'tracks/sant-marti-sacalm-el-far.gpx',
              'tracks/sant-jeroni-montserrat.gpx',
              'tracks/lestany-puig-de-la-caritat.gpx',
              'tracks/pedraforca.gpx',
              'tracks/La_Mola_amb_NT.gpx',
              'tracks/Creu_de_Gurb_amb_NT_.gpx',
              'tracks/Puigmal_Núria_Fontalba.gpx',
              'tracks/Collbaix.gpx',
              'tracks/Salga_Aguda_1172.gpx',
              'tracks/Gemi_dissabte_Sant_Honorat.gpx',
              'tracks/El_Taga.gpx',
              'tracks/Caco_Bellmunt.gpx',
              'tracks/vallter_refugi_de_carançà_vallter.gpx',
              'tracks/Puigsacalm.gpx',
              'tracks/Fins_a_la_Bauma_de_L_Espluga_.gpx',
              'tracks/Navarcles_.gpx',
              'tracks/Artés_amb_el_ganàpia_.gpx',
              'tracks/moia-olo.gpx',
              'tracks/sant-feliu-de-guixols-girona-sant-feliu-de-guixols.gpx',
              'tracks/Cabrera_.gpx',
              'tracks/la-bagueta-puig-cornador-riera-de-merles-la-bagueta.gpx',
              'tracks/riera-de-ciuret-llac-viada.gpx',
              'tracks/centelles.gpx',
              'tracks/les-preses-sant-miquel-del-corb.gpx',
              'tracks/mont-olymp-etapa-1.gpx',
              'tracks/mont-olymp-etapa-2.gpx',
              'tracks/mont-olymp-etapa-3.gpx',
              'tracks/7-llacs-de-rila.gpx',
              'tracks/ruta-colonies.gpx',
              'tracks/passejada-per-casserres-dia-1.gpx',
              'tracks/passejada-per-casserres-dia-2.gpx',
              'tracks/passejada-per-casserres-dia-3.gpx',
              'tracks/casserres.gpx',
              'tracks/moia-muntanyola-sta-eulalia-de-riuprimer-sant-sebastia-vic-m.gpx',
              'tracks/volta-al-pedraforca.gpx',
              'tracks/carros-de-foc.gpx',
              'tracks/3-turons-vic.gpx',
              'tracks/excurcio-a-la-cova-danes.gpx',
              'tracks/vall-de-bianya.gpx',
              'tracks/massis-de-lorri-3-dies.gpx',
              'tracks/trail-del-fai-2021-quart-de-marato.gpx',
              'tracks/Turó_de_Comellats_l_Ermità_i_avenc_dona_morta_.gpx',
              'tracks/Bastille_et_Mont_Jalla.gpx',
              'tracks/Carenes_del_cogulló.gpx',
              'tracks/Via_ferrada_Baumes_Corcades.gpx',
              'tracks/Baumes_del_Lluçanès_amb_el_GEMI.gpx',
              'tracks/La_foradada.gpx',
              'tracks/Sant_Salvador_d_Espases_i_el_Puig_Cendrós.gpx',
              'tracks/Caco_Castell_de_Bellver.gpx',
              'tracks/Morning_Hike.gpx',
              'tracks/camping-canon-do-sil-monasterio-sta-cristina-canon-de-sil-ca.gpx',
              'tracks/puigventos-cogullo-destela-roca-dauro-torreta-dels-enginyers.gpx',
              'tracks/llaes-balmes-del-teixidor-castell-de-milany-llaes.gpx',
              'tracks/club-nautic-del-panta-de-sau-morro-de-labella-tavartet.gpx',
              'tracks/la-fageda-den-jorda.gpx',
              'tracks/santa-fe-les-agudes-turo-de-lhome-santa-fe.gpx',
              'tracks/serra-del-picancel-serrat-del-migdia-cingles-de-la-por-sant-.gpx',
              'tracks/malanyeu-griell-de-cal-pigot-la-foradada-cap-de-la-baga-de-c.gpx',
              'tracks/lac-des-bouillouses-carlit-lac-des-bouillouses.gpx',
              'tracks/Puig_Soler.gpx',
              'tracks/Puig_de_la_Creu.gpx',
              'tracks/Granera_Castellar_.gpx',
              'tracks/Rocallarga.gpx',
              'tracks/Puig_Alter_522.gpx',
              'tracks/La_Romànica_2024_Navàs.gpx',
              'tracks/bombers.gpx',
              'tracks/Sant_Silvestre_Estany.gpx',
              'tracks/Cursa_Guardiola.gpx',
              'tracks/Cursa_Fageda.gpx',
              'tracks/Cervesa.gpx',
              'tracks/Hostalets.gpx',
              'tracks/El_Catllar.gpx',
              'tracks/Trail_Fonts_del_Montseny.gpx',
              'tracks/Trail_3_Comarques.gpx',
              'tracks/Saltamarrades.gpx',
              'tracks/fai.gpx',
              'tracks/ratafia.gpx'          
]
