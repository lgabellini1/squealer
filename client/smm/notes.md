1.	bootstrap `pagination`, for a lot of posts  

# features

## tocheck
*	check chars per each vip (day, week, month)
*	canali riservati (è solo un'istanza di canale)

## optional
*	write: short links 

## todo
*	I messaggi possono essere indirizzati ad un singolo utente, oppure ad un canale, oppure a tutti (pubblici).
*	write: to personal (no count chars, reactions)
*	write: imgs (125 char)
*	write: geolocazioni (Una geolocazione viene mostrata come una mappa e conta come un'immagine.)
*	write: show remaining chars in real time
*	Se l’utente ha terminato la quota e sta ancora componendo un messaggio, può usare un certo numero F di caratteri extra. Questa quantità va visualizzata in maniera appropriata, non può essere usata per comporre un messaggio da zero e dovrà essere “pagata” in seguito
*	msg personal - I messaggi ad utenti specifici (non a canali, non pubblici) non usano quota e sono sempre disponibili anche senza quota residua.
*	Un utente può aumentare la quota comprandola (per un anno), oppure ottenendo apprezzamenti dal proprio pubblico. Similmente, le reazioni negative diminuiscono la quota (anche quella comprata) fino a farla scomparire (vedi prossime slide) 
*	impl destinatari/menzioni - Squealer usa indirizzi per diffondere gli squeal, ma distingue tra menzioni e destinatari
	-	La sintassi degli indirizzi è la stessa ma la menzione appare nel corpo del messaggio mentre il destinatario ha un campo tutto suo.
	-	@individuo associato ad un singolo utente registrato.
	-	§canale (lettere minuscole) è un canale di squeal di proprietà di uno o più utenti, che decidono chi può leggerli e chi può scriverne di nuovi.
	-	§CANALE (lettere maiuscole) sono canali riservati a SQUEALER e gestiti dalla redazione. Vedi dettagli nella prossima slide.
	-	#keyword sono "canali" estemporanei creati in qualunque momento e accessibili da chiunque senza permessi o limitazioni.
	*	Gli indirizzi specificati come menzioni sono solo ricercabili, mentre gli indirizzi specificati come destinatari vengono notificati agli iscritti all'indirizzo stesso


## all
*	E’ obbligatorio includere 3 §CANALI riservati tra cui almeno un canale
	§CONTROVERSIAL (vedi prossima slide)
	! Alcuni esempi:
	! Squeal di tendenza: §TRENDING, §NEWS, §TOP_1000
	! Squeal random: §RANDOM_1000, §RANDOM_ITALY,
	§RANDOM_BOLOGNA (e qualunque altra area definita dalla redazione)
	! Squeal importanti: §ALL, §EMERGENCY, §EMERGENCY_BOLOGNA, ecc.
	! Squeal controversi: §CONTROVERSIAL_TOP, §CONTROVERSIAL_1000,
	§CONTROVERSIAL_ITALY, §CONTROVERSIAL_RANDOM
	! Alcuni canali non sono mai silenziabili: §ALL,
	§EMERGENCY, §EMERGENCY_BOLOGNA, ecc.

! Ogni utente, registrato o meno, può reagire ad un messaggio in maniera positiva
o negativa con appositi emoji (scelti dal gruppo, ad es. “Concordo”, “Mi piace”,
"sono contrario", "mi disgusta", ecc.)
! Esiste una massa critica (CM) di reazioni positive e negative. Le reazioni
polarizzate (R+ e R-) vengono contate separatamente, non si annullano mai. Il
valore della massa critica è uguale sia per R+ che R-. Proviamo con CM = 0.25 * X.
! Ogni messaggio che supera la massa critica viene etichettato come "popolare”
(R+ > CM ), "impopolare" (R- > CM) o "controverso” (se sia R+ che R- superano la
soglia CM).
! Un utente che posta messaggi sistematicamente popolari viene premiato con un
aumento di quota, se impopolari riceve una diminuzione della quota fino a zero
(inclusa la quota acquistata): ogni 10 messaggi con R+>CM vinco 1% della quota
iniziale, ogni 3 messaggi con R- > CM perdo 1% della quota iniziale.
! I messaggi controversi non contano per la variazione della quota, ma appaiono
nei canali dedicati (§CONTROVERSIAL)

Squealer: il formato dei messaggi
! Ogni messaggio ha un corpo e un elenco di destinatari sotto il
controllo dell'autore, e una serie di metadati generati
automaticamente o manualmente dal moderatore Squealer.
! Il corpo è un messaggio di testo, OPPURE un'immagine OPPURE un
video, oppure una geolocazione.
! I destinatari sono un elenco di indirizzi di individui, canali o keyword,
senza limiti e senza impatto sulla quota.
! Data ed ora del messaggio non modificabili
! # reazioni positive (divise per sottotipo)
! # reazioni negative (divise per sottotipo)
! Categoria (privato, pubblico, popolare, impopolare, controverso)
! Canali Squealer a cui è stato aggiunto dalla redazione
! Esistono inoltre messaggi automatici o derivati da sorgenti esterne
(vedi prossima slide)

Squealer: messaggi automatici e
da sorgenti esterne ! Ogni gruppo deve implementare almeno 3 tipi di messaggi
generati automaticamente. Di questi, il tipo "messaggi
temporizzati" è obbligatorio, gli altri 2 a discrezione.
! Alcuni esempi:
! Messaggi temporizzati: generati ogni TOT secondi a contenuto fisso o
variabile attraverso data, ora e contatore. Sono utili per servizi di
geolocalizzazione (vedi prossime slide). Ad esempio: "Ciao a tutti, questo è
il mio messaggio n. {NUM} delle ore {TIME} del giorno {DATE}. ”
! News: news lette da API pubbliche o da feed RSS e trasformati in squeal
! Immagini Causali: immagini recuperate da API pubbliche disponibili su
Web e trasformati in squeal
! Forse non sapevi che...: il testo iniziale di pagine random da Wikipedia.
! Twitter RIP: messaggi pubblici letti da canali Twitter attraverso l’API.
Sappiamo che Twitter è destinato a scomparire ma gli diamo qualche
ultima possibilità "

Squealer: georeferenziazione
• I messaggi temporizzati possono essere usati per costruire dinamicamente
mappe e mostrarle in una pagina dedicata.
• Ad esempio, assumiamo che ogni ambulanza, autobus, taxi, camion di corrieri
sia dotato di un proprio device con Squealer attivo
• Questo emette ogni N minuti uno squeal di geolocazione sulla propria posizione
• Questi squeal vengono raccolti in un canale e visualizzati come un unico segnale
su una mappa, disponibile per tutti gli iscritti a quel canale
• Nella prossima slide alcuni esempi (non vincolanti) di servizi social che è
possibile costruire sfruttando questa funzionalità

Squealer: Architettura del sistema
Esistono tre ambienti per usare Squealer:
▪ La App, ovvero l'applicazione per gli utenti finali e altamente mobili.
Mobile first, non adatta per grandi volumi di dati e uso
professionale.
▪ Il SMM dashboard, ovvero l'applicazione per influencer, VIP e
utenti professionali che permette di visualizzare in maniera
integrata e complessiva tutte le attività di interazione con il proprio
pubblico:, squeal, risposte, reazioni, trend, ecc. Questa è
un'applicazione per PC (ma non impossibile da usare su
smartphone)
▪ Il moderator dashboard, ovvero l'applicazione per moderatori e
redattori gestiti da Squealer, che verificano trend e reazioni,
attribuiscono punteggi, risolvono grane, gestiscono blocchi e
sblocchi, ecc. Questa è un'applicazione solo per PC.

La app
La app è l'interfaccia principale per i non-professionisti, in cui leggere gli
squeal e crearne di nuovi. Ha dunque funzioni di lettura, di scrittura e di
accounting.
Funzioni di accounting
▪ Creazione account, cambio password, reset password, eliminazione.
▪ Tipo di account: normale, verificato, professional, moderatore squealer.
▪ Scelta di un social media manager – rimozione del SMM. (entrambi
professional: sia utente sia SMM)
▪ Acquisto caratteri aggiuntivi giornalieri, settimanali, mensili (solo
verificati e pro).
▪ Acquisto di un §canale personalizzato (caratteri minuscoli)
▪ Aggiunta di altri amministratori al §canale di proprietà

La app
Funzioni di lettura senza login
▪ Solo messaggi di canali ufficiali Squealer (e.g.: §TRENDING, §NEWS, §TOP_1000,
§RANDOM_1000, §RANDOM_ITALY, §RANDOM_BOLOGNA)
Funzioni di lettura con login
▪ Per default organizzata in maniera temporale inversa, mescolando messaggi
personali, canali a cui sono iscritto, canali ufficiali Squealer.
▪ Si mostrano solo destinatari §canale, §CANALE e #keyword, mai @individui.
▪ Ricerca per §canale, #keyword e menzione (nel corpo del testo).
▪ Reazioni: 1 positiva e 1 negativa oppure 3-4 di tipo positivo e 3-4 di tipo
negativo.
▪ Iscrizione e rimozione da §canali e §CANALI a scelta dell'utente. 

La app
Funzioni di scrittura
▪ Creazione nuovo squeal di tipo testo, immagine (copia e incolla da Internet
oppure accesso a fotocamera e foto del cellulare) o geolocazione (accesso al
sistema di geolocalizzazione del cellulare, visualizzazione della posizione su
mappa)
▪ Risposta a squeal altrui (oltre alla reazione – condivide i destinatari pubblici)
▪ Counter sempre aggiornati con caratteri residui giornalieri, settimanali e
mensili – distinzione tra caratteri effettivamente residui e caratteri che
rimarrebbero dopo la pubblicazione di questo post
▪ Specifica di destinatari (@individui, §canali minuscoli e/o #keyword)
▪ Ripetizione del messaggio ogni tot secondi (con parti variabili che si
aggiornano ogni volta). Beep acustico ad ogni ripetizione.

Lo SMM dashboard
Il SMM è un'applicazione web tradizionale, solo online, sia per device mobili sia
per PC, orientata a fornire accesso all'account di un VIP da parte di un Social
Media Manager.
▪ Tipi di account: Sia il VIP sia il SMM debbono essere account pro. Il VIP scegli il
SMM e può successivamente rimuoverlo.
▪ SMM multiplo: il SMM può dover gestire diversi account VIP (diciamo anche a 5-
6, ma non c'è un numero massimo).
NON DEVE SBAGLIARSI PER NESSUN MOTIVO.
▪ Scrittura: il SMM deve poter postare squeal a nome e per conto del VIP. Non deve
essere possibile per i destinatari distinguere se lo squeal è del VIP o del suo SMM.
▪ Monitoraggio: risposte ai post, post con più e meno reazioni, post popolari, post
a rischio controversia o impopolare. Caratteri residui giornalieri, settimanali,
mensili
NON SI PUO' RIMANERE MUTI PER MANCANZA DI CARATTERI
▪ Acquisto d'emergenza di caratteri (a prezzo maggiorato)
▪ Trend dei post del VIP: grafici con andamenti storici di popolarità, numero di
reply, frequenza di post, ecc.
▪ Geolocazione fittizia: il SMM può cliccare in una posizione qualunque della
mappa e mandare uno squeal geolocalizzato lì.

Il moderator dashboard
Il moderator dashboard è la parte dell'applicazione che permette agli
amministratori di Squealer di gestire i dati degli utenti e abilitare e configurare i
servizi e i prodotti. Può accedere solo un utente moderatore Squealer.
E' un'applicazione web tradizionale, solo online, principalmente per PC.
• Utenti. Il moderatore può elencare gli utenti e filtrarli per nome, tipo e popolarità.
Può bloccare e riabilitare gli utenti a mano. Può aumentare a mano i caratteri residui
per singoli utenti.
• Squeal: il moderatore può elencare i post e filtrarli per mittente, data e destinatari.
Può cambiare a mano i destinatari (ad esempio, aggiungere §CANALI ufficiali
Squealer). Può cambiare a mano il numero di reazioni positive e/o negative.
• §canali: il moderatore può elencare i §canali degli utenti e filtrarli per proprietari,
numero di post e popolarità. Può cambiare a mano i proprietari ed il nome. Può
bloccare un §canale.
• §CANALI: il moderatore può elencare i §CANALI ufficiali Squealer, aggiungerne,
toglierne e cambiarne la descrizione (utile per gli altri moderatori). Può aggiungere
uno squeal ad un §CANALE o rimuoverlo in qualunque momento. Può aggiungere
una regola che attribuisce automaticamente un post ad un canale se soddisfa un
criterio. 