
export const curriculum = [
  // ==========================================
  // MODULE 1: NETWORK MODELS
  // ==========================================
  {
    id: "mod-1",
    title: "Module 1: Network Models",
    description: "Understanding the OSI and TCP/IP models is the foundation of all networking.",
    topics: [
      {
        id: "t-1-1",
        title: "1.1 The OSI Model: Layers 1-3",
        diagram: "osi-layers",
        content: `
          <h3>The Foundation of Networking</h3>
          <p>The Open Systems Interconnection (OSI) model is a conceptual framework used to understand network interactions. It breaks down the complex process of sending data into seven smaller, manageable layers. The bottom three layers are considered the "Media Layers" because they deal with the physical delivery of data across the network hardware.</p>
          
          <ul>
            <li>
              <strong>Layer 1 - Physical Layer (The Hardware):</strong><br>
              This is the lowest layer of the OSI model, responsible for the actual physical connection between devices. It defines the hardware elements, such as cables, connectors, voltages, and data rates. At this layer, data is viewed as raw, unstructured <strong>Bits</strong> (1s and 0s) transmitted over a physical medium like copper wire, fiber optic glass, or radio waves.
              <br><br>
              <em>Key Functions:</em> Bit synchronization, bit rate control, physical topologies, and transmission modes (Simplex, Half-duplex, Full-duplex).
              <br>
              <em>Devices:</em> Network Interface Cards (NICs), Hubs, Repeaters, Modems, and Cabling (Cat6, Fiber).
            </li>
            
            <li>
              <strong>Layer 2 - Data Link Layer (The Local Delivery):</strong><br>
              The Data Link layer is responsible for node-to-node delivery within the same network. It packages the raw bits from Layer 1 into organized units called <strong>Frames</strong>. This layer ensures that data is transferred error-free between two directly connected devices. It is divided into two sublayers: the Logical Link Control (LLC) for flow control and the Media Access Control (MAC) for physical addressing.
              <br><br>
              <em>Key Functions:</em> Physical addressing (MAC addresses), error detection (FCS/CRC), flow control, and access control (CSMA/CD).
              <br>
              <em>Devices:</em> Switches, Bridges, and Wireless Access Points (WAPs).
            </li>

            <li>
              <strong>Layer 3 - Network Layer (The Routing):</strong><br>
              The Network layer is responsible for the logical addressing and routing of data between <em>different</em> networks. While Layer 2 handles local delivery, Layer 3 handles global delivery. It encapsulates frames into <strong>Packets</strong> and adds logical addresses (IP addresses) to the header. Routers operate at this layer to determine the best path (routing) for data to travel across the internet.
              <br><br>
              <em>Key Functions:</em> Logical addressing (IPv4/IPv6), routing (path selection), fragmentation and reassembly, and error handling.
              <br>
              <em>Devices:</em> Routers and Layer 3 Switches.
            </li>
          </ul>

          <div class="concept-card">
            <h4>Exam Tip: PDU Names</h4>
            <p>Memorizing the Protocol Data Unit (PDU) for each layer is critical for the exam. A simple mnemonic is "Please Do Not Throw Sausage Pizza Away" (Physical, Data Link, Network, Transport, Session, Presentation, Application).</p>
            <p><strong>L1 = Bit</strong> | <strong>L2 = Frame</strong> | <strong>L3 = Packet</strong></p>
          </div>
        `,
        quiz: { question: "Which layer is responsible for logical addressing (IP) and routing?", options: ["Physical", "Data Link", "Network", "Transport"], correctAnswer: 2, explanation: "Layer 3 (Network) handles logical addressing (IP) and routing packets between networks." }
      },
      {
        id: "t-1-2",
        title: "1.2 The OSI Model: Layers 4-7",
        content: `
          <h3>The Host Layers</h3>
          <p>The upper four layers of the OSI model are known as the "Host Layers" because they run within the operating system or application software of the host device. They deal with end-to-end data reliability, session management, data formatting, and user interfaces.</p>
          
          <ul>
            <li>
              <strong>Layer 4 - Transport Layer (Reliability):</strong><br>
              The Transport layer ensures the reliable arrival of messages and provides error checking mechanisms and data flow controls. It segments large data chunks into smaller <strong>Segments</strong> (TCP) or <strong>Datagrams</strong> (UDP). This layer is responsible for end-to-end communication and port addressing, ensuring that data is delivered to the correct application service (e.g., Port 80 for Web, Port 25 for Email).
              <br><br>
              <em>Key Functions:</em> Segmentation and reassembly, connection control (3-way handshake), flow control (windowing), and error recovery.
              <br>
              <em>Protocols:</em> TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).
            </li>

            <li>
              <strong>Layer 5 - Session Layer (The Manager):</strong><br>
              The Session layer establishes, manages, and terminates connections between applications. It acts as a dialogue controller, setting up the conversation between two devices, keeping the connection alive, and tearing it down when finished. It also handles synchronization, allowing data transfer to resume from a checkpoint if interrupted, rather than starting over from the beginning.
              <br><br>
              <em>Key Functions:</em> Session establishment, maintenance, and termination; dialogue control (simplex, half-duplex, full-duplex); and synchronization.
              <br>
              <em>Examples:</em> RPC (Remote Procedure Call), NetBIOS, and SQL session management.
            </li>

            <li>
              <strong>Layer 6 - Presentation Layer (The Translator):</strong><br>
              The Presentation layer ensures that the data is in a readable format for the application layer. It acts as a translator between the network format and the application format. This is where data encryption and decryption occur (making it crucial for security), as well as data compression to reduce bandwidth usage. It formats data into standards like JPEG, GIF, ASCII, or EBCDIC.
              <br><br>
              <em>Key Functions:</em> Data translation/formatting, character code translation, data compression, and encryption/decryption (SSL/TLS).
              <br>
              <em>Formats:</em> JPEG, MPEG, GIF, ASCII, TLS.
            </li>

            <li>
              <strong>Layer 7 - Application Layer (The Interface):</strong><br>
              The Application layer is the topmost layer and the one closest to the end-user. It provides the interface for users to interact with the network services. It does not refer to the application itself (like Chrome or Outlook) but rather the protocols that those applications use to communicate over the network. When you click a link, your browser uses the HTTP protocol at this layer to request the page.
              <br><br>
              <em>Key Functions:</em> Network services access, resource sharing, remote file access, and directory services.
              <br>
              <em>Protocols:</em> HTTP, HTTPS, FTP, SMTP, DNS, DHCP, SSH, Telnet.
            </li>
          </ul>
        `,
        quiz: { question: "Which layer handles encryption and data formatting?", options: ["Session", "Transport", "Presentation", "Application"], correctAnswer: 2, explanation: "The Presentation Layer (Layer 6) translates data into a readable format and handles encryption." }
      },
      {
        id: "t-1-3",
        title: "1.3 The TCP/IP Model",
        content: `
          <h3>The Real World Protocol Suite</h3>
          <p>While the OSI model is a theoretical reference model perfect for teaching, the TCP/IP model (also known as the DoD model) is the practical model used by the Internet today. It condenses the seven OSI layers into four broad layers, reflecting how protocols are actually implemented in the real world.</p>
          
          <ul>
            <li>
              <strong>Application Layer (Layer 4):</strong><br>
              This layer combines the functions of the OSI Application, Presentation, and Session layers (Layers 5, 6, and 7). It handles high-level protocols, representation, encoding, and connection control.
              <br><em>Protocols:</em> HTTP, FTP, SMTP, DNS, RIP, SNMP.
            </li>

            <li>
              <strong>Transport Layer (Layer 3):</strong><br>
              This layer maps directly to the OSI Transport layer (Layer 4). It is responsible for end-to-end communication and reliability. It establishes logical connections between hosts.
              <br><em>Protocols:</em> TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).
            </li>

            <li>
              <strong>Internet Layer (Layer 2):</strong><br>
              This layer maps directly to the OSI Network layer (Layer 3). Its primary job is routing packets across internetworks. It defines the addressing and routing structures used for the TCP/IP protocol suite.
              <br><em>Protocols:</em> IP (IPv4/IPv6), ICMP, ARP, IGMP.
            </li>

            <li>
              <strong>Network Interface Layer (Layer 1):</strong><br>
              This layer combines the OSI Data Link and Physical layers (Layers 1 and 2). It deals with the physical transmission of data and the hardware addressing (MAC). It is often referred to as the "Link Layer" or "Network Access Layer".
              <br><em>Standards:</em> Ethernet, Wi-Fi, Token Ring, ATM, Frame Relay.
            </li>
          </ul>

          <div class="concept-card">
            <h4>Key Difference</h4>
            <p>The OSI model has 7 layers, while the TCP/IP model has 4. Be careful on the exam: if a question asks about the "Internet Layer", think TCP/IP. If it asks about the "Network Layer", think OSI.</p>
          </div>
        `,
        quiz: { question: "The 'Internet' layer in the TCP/IP model corresponds to which layer in the OSI model?", options: ["Network", "Transport", "Data Link", "Physical"], correctAnswer: 0, explanation: "The Internet layer in TCP/IP performs the same functions as the Network layer (Layer 3) in OSI." }
      },
      {
        id: "t-1-4",
        title: "1.4 Encapsulation",
        diagram: "encapsulation",
        content: `
          <h3>The "Letter in an Envelope" Analogy</h3>
          <p>Encapsulation is the process of wrapping data with protocol information as it moves down the OSI layers. Think of it like sending a very important letter through the mail system. You don't just throw the paper into the mailbox; you must wrap it in specific layers to ensure it gets to the right destination.</p>
          
          <div class="concept-card">
            <h4>Step-by-Step Process</h4>
            <ol>
              <li>
                <strong>Data (Layer 7 - Application):</strong><br>
                You write the letter. This is your raw <strong>Data</strong>. It contains the message you want to send (e.g., an email body or a file). At this stage, it's just user data.
              </li>
              <li>
                <strong>Segment (Layer 4 - Transport):</strong><br>
                You fold the letter so it fits. The Transport layer adds a header with <strong>Port Numbers</strong> (Source and Destination Ports) to identify which application sent it and which should receive it. It also adds sequence numbers for reliability. The PDU is now a <strong>Segment</strong> (TCP) or Datagram (UDP).
              </li>
              <li>
                <strong>Packet (Layer 3 - Network):</strong><br>
                You put the folded letter into an envelope. The Network layer adds a header with <strong>IP Addresses</strong> (Source and Destination IPs) to identify the computers involved. This allows routers to deliver it across the internet. The PDU is now a <strong>Packet</strong>.
              </li>
              <li>
                <strong>Frame (Layer 2 - Data Link):</strong><br>
                The mailman puts the envelope into his mailbag. The Data Link layer adds a header with <strong>MAC Addresses</strong> (Source and Destination MACs) for local delivery to the next hop (router or switch). It also adds a trailer (FCS) to check for errors. The PDU is now a <strong>Frame</strong>.
              </li>
              <li>
                <strong>Bits (Layer 1 - Physical):</strong><br>
                The mail truck drives the bag to the destination. The Physical layer converts the frame into <strong>Bits</strong> (electrical signals or light pulses) and transmits them over the wire.
              </li>
            </ol>
          </div>

          <p><strong>Decapsulation</strong> is the reverse process. When the receiving computer gets the bits, it rebuilds the frame, checks the MAC, strips the frame header, checks the IP, strips the packet header, checks the port, strips the segment header, and finally presents the raw data to the application.</p>
        `,
        quiz: { question: "At which layer of the OSI model is a header added that includes Source and Destination IP addresses?", options: ["Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)"], correctAnswer: 2, explanation: "The Network Layer (Layer 3) adds the IP header, creating a Packet." }
      }
    ]
  },

  // ==========================================
  // MODULE 2: NETWORK TYPES & TOPOLOGIES
  // ==========================================
  {
    id: "mod-2",
    title: "Module 2: Network Types & Topologies",
    description: "LANs, WANs, and how we connect them.",
    topics: [
      {
        id: "t-2-1",
        title: "2.1 Network Types",
        content: `
          <h3>Defining Network Scope</h3>
          <p>Networks are primarily categorized by their geographical scope—how large of an area they cover. Understanding these distinctions is crucial for designing appropriate infrastructure, as the technologies used for a personal workspace differ vastly from those connecting cities.</p>
          
          <ul>
            <li>
              <strong>PAN (Personal Area Network):</strong><br>
              This is the smallest type of network, centered around an individual person's workspace. It typically has a range of only a few meters. The most common technologies are <strong>Bluetooth</strong> (for connecting headphones, mice, or syncing a phone to a car) and <strong>NFC</strong> (Near Field Communication) for contactless payments.
              <br><em>Range:</em> < 10 meters.
            </li>
            
            <li>
              <strong>LAN (Local Area Network):</strong><br>
              A LAN connects devices within a limited area such as a home, a single office, or a building. It offers high data transfer speeds and low latency. LANs are typically owned, controlled, and managed by a single person or organization. The dominant technologies are <strong>Ethernet</strong> (802.3) for wired connections and <strong>Wi-Fi</strong> (802.11) for wireless.
              <br><em>Range:</em> ~100 meters (per cable segment).
            </li>

            <li>
              <strong>CAN (Campus Area Network):</strong><br>
              A CAN connects multiple LANs within a specific geographical area, such as a university campus, industrial park, or military base. It is larger than a LAN but smaller than a MAN. The key characteristic is that the organization owns the land and the cabling between the buildings (e.g., fiber running through conduits under the campus), meaning they don't need to lease lines from an ISP.
              <br><em>Range:</em> 1 - 5 kilometers.
            </li>

            <li>
              <strong>MAN (Metropolitan Area Network):</strong><br>
              A MAN covers a larger geographic area, typically an entire city or a large campus. It connects multiple LANs together. A classic example is a city's public Wi-Fi network or a Cable TV network that provides internet to a city. MANs often use fiber optic backbones or Metro Ethernet technologies.
              <br><em>Range:</em> 5 - 50 kilometers.
            </li>

            <li>
              <strong>WAN (Wide Area Network):</strong><br>
              A WAN spans a large physical distance, such as a country, continent, or the entire globe. The ultimate WAN is the <strong>Internet</strong>. WANs connect smaller networks (LANs/MANs) together. Because of the vast distances, WANs typically use leased telecommunication lines (like MPLS, Fiber, or Satellite) and have lower speeds and higher latency compared to LANs.
              <br><em>Range:</em> Global.
            </li>
          </ul>
        `,
        quiz: { question: "A network connecting multiple buildings on a university campus is best described as a:", options: ["PAN", "LAN", "CAN", "WAN"], correctAnswer: 2, explanation: "A Campus Area Network (CAN) connects multiple LANs in a limited geographic area like a university." }
      },
      {
        id: "t-2-2",
        title: "2.2 Physical Topologies",
        diagram: "topology-star",
        content: `
          <h3>The Traffic Flow Analogy</h3>
          <p>A network topology is the physical or logical layout of the connections between devices. Think of it like the road system in a city: the way the roads are laid out determines how traffic flows, where the congestion points are, and what happens if a road is blocked.</p>
          
          <div class="concept-card">
            <h4>Common Layouts</h4>
            <ul>
              <li>
                <strong>Star Topology (The Roundabout):</strong><br>
                In a Star topology, every device connects to a central device, usually a <strong>Switch</strong>. This is the most common topology today.
                <br><em>Pros:</em> If one cable breaks, only that one device goes offline. It's easy to add new devices.
                <br><em>Cons:</em> The switch is a <strong>Single Point of Failure</strong>. If the switch dies, the whole network dies.
              </li>
              
              <li>
                <strong>Mesh Topology (The Spider Web):</strong><br>
                In a Mesh topology, devices connect directly to multiple other devices.
                <br><strong>Full Mesh:</strong> Every device connects to <em>every</em> other device. This provides the highest redundancy (fault tolerance) but is extremely expensive due to the amount of cabling required. Formula for cables: n(n-1)/2.
                <br><strong>Partial Mesh:</strong> Critical devices connect to everyone, others connect to just a few. Common in WANs and the Internet.
              </li>

              <li>
                <strong>Bus Topology (The One-Way Street):</strong><br>
                A legacy topology where all devices connect to a single central cable (the "backbone" or "bus").
                <br><em>Cons:</em> If the main cable breaks anywhere, the <strong>entire network fails</strong>. It also requires "terminators" at both ends to stop signal bounce.
              </li>

              <li>
                <strong>Ring Topology (The Loop):</strong><br>
                Devices are connected in a closed loop. Data travels in one direction.
                <br><em>Cons:</em> If one device fails or a cable is cut, the loop is broken and the network stops (unless there is a dual-ring for redundancy).
              </li>
            </ul>
          </div>
        `,
        quiz: { question: "Which topology has a single point of failure at the central device?", options: ["Mesh", "Bus", "Star", "Ring"], correctAnswer: 2, explanation: "In a Star topology, if the central switch fails, all connected devices lose connectivity." }
      },
      {
        id: "t-2-3",
        title: "2.3 SOHO Networks",
        content: `
          <h3>The "All-in-One" Box</h3>
          <p>In a Small Office / Home Office (SOHO) environment, you typically don't have a rack full of separate enterprise gear. Instead, you have a single "Wireless Router" that performs the job of multiple enterprise devices combined into one plastic box.</p>
          
          <div class="concept-card">
            <h4>Roles of a SOHO Router</h4>
            <ul>
              <li>
                <strong>Router:</strong><br>
                It routes traffic between your local network (LAN) and the internet (WAN). It uses a technique called <strong>NAT (Network Address Translation)</strong> to allow all your home devices to share one single Public IP address provided by your ISP.
              </li>
              <li>
                <strong>Switch:</strong><br>
                The 4 or 5 LAN ports on the back act as a built-in switch, allowing you to plug in wired devices like a PC or gaming console.
              </li>
              <li>
                <strong>Wireless Access Point (WAP):</strong><br>
                It has built-in radios and antennas to broadcast a Wi-Fi signal, allowing wireless devices to connect to the LAN.
              </li>
              <li>
                <strong>Firewall:</strong><br>
                It performs basic stateful packet inspection, blocking unsolicited incoming traffic from the internet to protect your devices.
              </li>
              <li>
                <strong>Modem (Sometimes):</strong><br>
                Some ISP-provided units also include the modem (Cable/DSL/Fiber ONT) inside the same box.
              </li>
            </ul>
          </div>
        `,
        quiz: { question: "In a typical SOHO router, which port connects to the Internet Service Provider?", options: ["LAN Port", "Console Port", "WAN Port", "USB Port"], correctAnswer: 2, explanation: "The WAN (Wide Area Network) port connects to the external network (ISP)." }
      },
      {
        id: "t-2-4",
        title: "2.4 IoT Topologies",
        content: `
          <h3>Smart Home Networking</h3>
          <p>The Internet of Things (IoT) refers to smart devices (light bulbs, thermostats, locks) connecting to a network. Unlike laptops or phones, these devices are low-power and often battery-operated, so standard Wi-Fi is too power-hungry for them. Instead, they use specialized protocols.</p>
          
          <ul>
            <li>
              <strong>Z-Wave:</strong><br>
              A proprietary wireless protocol that operates on the 900 MHz band. This low frequency allows it to penetrate walls very well. It uses a <strong>Mesh Topology</strong>, where plugged-in devices (like smart plugs) act as repeaters to hop the signal back to the hub.
            </li>
            <li>
              <strong>Zigbee:</strong><br>
              An open standard (802.15.4) that operates on the 2.4 GHz band. Like Z-Wave, it uses a <strong>Mesh Topology</strong>. Because it uses 2.4 GHz, it can suffer from interference with Wi-Fi, but it is faster and more widely supported.
            </li>
            <li>
              <strong>Ant+:</strong><br>
              Used primarily in health and fitness sensors (heart rate monitors, cadence sensors). It is designed for low-power, short-range monitoring.
            </li>
            <li>
              <strong>RFID & NFC:</strong><br>
              <strong>RFID</strong> (Radio Frequency Identification) is used for tracking tags (inventory, badges). <strong>NFC</strong> (Near Field Communication) is a subset of RFID used for very close-range (4cm) secure data exchange, like Apple Pay or tapping a badge to open a door.
            </li>
          </ul>
        `,
        quiz: { question: "Which wireless topology do Z-Wave and Zigbee typically use to extend range?", options: ["Star", "Mesh", "Bus", "Ring"], correctAnswer: 1, explanation: "IoT devices often form a mesh network, hopping data from device to device to reach the hub." }
      }
    ]
  },

  // ==========================================
  // MODULE 3: PHYSICAL LAYER
  // ==========================================
  {
    id: "mod-3",
    title: "Module 3: Cabling & Hardware",
    description: "Copper, Fiber, and Transceivers.",
    topics: [
      {
        id: "t-3-1",
        title: "3.1 Twisted Pair (Copper)",
        content: `
          <h3>The Standard for LANs</h3>
          <p>Twisted Pair cabling is the most common type of cabling used in local area networks. It consists of pairs of insulated copper wires twisted together. The twisting is crucial because it cancels out electromagnetic interference (EMI) and <strong>Crosstalk</strong> (signal bleeding from one wire to another).</p>
          
          <div class="concept-card">
            <h4>UTP vs. STP</h4>
            <ul>
              <li><strong>UTP (Unshielded Twisted Pair):</strong> The standard for offices and homes. Cheaper and flexible but susceptible to high interference.</li>
              <li><strong>STP (Shielded Twisted Pair):</strong> Has a foil wrapping around the wires to block heavy interference. Used in factories or near large motors/fluorescent lights.</li>
            </ul>
          </div>

          <div class="concept-card">
            <h4>Categories (Memorize These)</h4>
            <table class="data-table">
              <tr><th>Category</th><th>Speed</th><th>Max Distance</th><th>Frequency</th></tr>
              <tr><td><strong>Cat 5e</strong></td><td>1 Gbps</td><td>100m</td><td>100 MHz</td></tr>
              <tr><td><strong>Cat 6</strong></td><td>10 Gbps</td><td>55m</td><td>250 MHz</td></tr>
              <tr><td><strong>Cat 6a</strong></td><td>10 Gbps</td><td>100m</td><td>500 MHz</td></tr>
              <tr><td><strong>Cat 8</strong></td><td>40 Gbps</td><td>30m</td><td>2000 MHz</td></tr>
            </table>
          </div>

          <p><strong>Plenum vs. Riser:</strong>
          <br><strong>Plenum (CMP):</strong> Must be used in "plenum spaces" (air ducts, drop ceilings) where air circulates. It is made of special low-smoke fire-retardant plastic.
          <br><strong>Riser (CMR):</strong> Used for running cables vertically between floors. Not fire-resistant enough for air ducts.</p>

          <p><strong>T568A vs. T568B:</strong> The two wiring standards for RJ-45. T568B is the most common in the US. The only difference is the Orange and Green pairs are swapped.</p>
        `,
        quiz: { question: "You are running cable in a drop ceiling used for air return. What cable rating is required?", options: ["PVC", "Plenum", "Shielded", "Riser"], correctAnswer: 1, explanation: "Plenum-rated cable is required by fire codes in air handling spaces because it does not give off toxic fumes when burned." }
      },
      {
        id: "t-3-2",
        title: "3.2 Fiber Optic Basics",
        diagram: "fiber-modes",
        content: `
          <h3>The Garden Hose Analogy</h3>
          <p>Fiber optic cables transmit data as pulses of light through a glass or plastic core. Unlike copper, fiber is immune to EMI (Electromagnetic Interference) and can travel much longer distances.</p>
          
          <div class="concept-card">
            <h4>Single Mode vs. Multi Mode</h4>
            <ul>
              <li>
                <strong>Single Mode Fiber (SMF):</strong><br>
                Uses a <strong>Laser</strong> light source. The core is extremely thin (9 microns), allowing light to travel straight down the center without bouncing.
                <br><em>Range:</em> Miles/Kilometers (Long Haul).
                <br><em>Color:</em> Yellow cable.
              </li>
              <li>
                <strong>Multi Mode Fiber (MMF):</strong><br>
                Uses an <strong>LED</strong> light source. The core is wider (50 or 62.5 microns). Light bounces off the walls (modal dispersion), which limits the distance.
                <br><em>Range:</em> ~300-500 meters (Within a building/campus).
                <br><em>Color:</em> Orange (OM1/OM2) or Aqua (OM3/OM4).
              </li>
            </ul>
          </div>

          <p><strong>WDM (Wavelength Division Multiplexing):</strong> A technology that sends multiple signals down the same fiber strand simultaneously by using different colors (wavelengths) of light (like distinct radio stations).</p>
        `,
        quiz: { question: "Which fiber type uses a laser light source and is used for long-distance runs?", options: ["Multi Mode", "Single Mode", "Coaxial", "Cat 6"], correctAnswer: 1, explanation: "Single Mode Fiber (SMF) uses a laser to send light down a tiny core, allowing it to travel very long distances without dispersion." }
      },
      {
        id: "t-3-3",
        title: "3.3 Fiber Connectors",
        content: `
          <h3>The Tips</h3>
          <p>Fiber connectors must be precise. If they are dirty or misaligned, light is lost (dB loss).</p>
          
          <ul>
            <li><strong>ST (Straight Tip):</strong> Round, bayonet twist-lock (like a BNC connector). "Stick and Twist". Older style.</li>
            <li><strong>SC (Subscriber Connector):</strong> Square, push-pull mechanism. "Square Connector". Common in switches.</li>
            <li><strong>LC (Lucent Connector):</strong> Small form factor, tab-lock (like a tiny RJ-45). High density. "Little Connector".</li>
            <li><strong>MTRJ:</strong> Looks like a small black block. Holds two fibers (Tx and Rx) in a single connector.</li>
          </ul>

          <div class="concept-card">
            <h4>Polishing Types (The End Face)</h4>
            <ul>
              <li><strong>UPC (Ultra Physical Contact):</strong> Blue connector. The glass is polished flat/slightly rounded. Good for most data.</li>
              <li><strong>APC (Angled Physical Contact):</strong> Green connector. The glass is cut at an 8-degree angle. This reflects less light back to the source (lower return loss). Critical for video and long-haul. <strong>Never plug APC into UPC!</strong></li>
            </ul>
          </div>
        `,
        quiz: { question: "Which fiber connector is known as the 'Square Connector' and uses a push-pull mechanism?", options: ["ST", "SC", "LC", "MTRJ"], correctAnswer: 1, explanation: "SC (Subscriber Connector) is easily identified by its square shape." }
      },
      {
        id: "t-3-4",
        title: "3.4 Transceivers",
        content: `
          <h3>Plugging into the Switch</h3>
          <p>Enterprise switches use modular ports, allowing you to swap out the interface type (Copper vs Fiber) using Transceivers.</p>
          
          <ul>
            <li><strong>SFP (Small Form-factor Pluggable):</strong> Supports 1 Gbps. Replaced the older, larger GBIC.</li>
            <li><strong>SFP+:</strong> Enhanced SFP. Supports 10 Gbps. Same physical size as SFP (usually compatible).</li>
            <li><strong>QSFP (Quad SFP):</strong> Supports 40 Gbps. Physically larger. Effectively 4 SFPs in one.</li>
            <li><strong>QSFP28:</strong> Supports 100 Gbps.</li>
          </ul>

          <div class="concept-card">
            <h4>Special Types</h4>
            <ul>
              <li><strong>BiDi (Bidirectional):</strong> Uses WDM to send (Tx) and receive (Rx) on a <strong>single fiber strand</strong> using two different wavelengths (e.g., 1310nm Up / 1490nm Down). Saves cabling costs.</li>
              <li><strong>DAC (Direct Attach Copper):</strong> A copper cable with SFP+ transceivers permanently attached to both ends. Used for short connections (3-5m) between switches in the same rack. Cheaper than fiber.</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which transceiver module supports speeds up to 10 Gbps?", options: ["SFP", "GBIC", "SFP+", "QSFP"], correctAnswer: 2, explanation: "SFP+ is the standard for 10 Gigabit Ethernet uplinks." }
      },
      {
        id: "t-3-5",
        title: "3.5 Cable Tools",
        content: `
          <h3>The Technician's Kit</h3>
          <p>You must know which tool to grab for which problem.</p>
          
          <ul>
            <li><strong>Crimper:</strong> Used to attach a connector (RJ-45) to the end of a cable.</li>
            <li><strong>Punchdown Tool:</strong> Used to terminate wires into a patch panel or keystone jack (wall outlet). It pushes the wire into the blade and cuts off the excess.</li>
            <li><strong>Tone Generator & Probe (Fox & Hound):</strong> Used to find a specific wire in a messy bundle. The generator sends a musical tone down the wire; the probe plays the sound when it touches the correct cable.</li>
            <li><strong>Cable Tester (Continuity):</strong> Checks if the pins are wired correctly (Wiremap). Tells you if there is a "Short" or "Open".</li>
            <li><strong>TDR (Time Domain Reflectometer):</strong> Advanced copper tester. Measures the length of the cable and locates the exact distance to a break.</li>
            <li><strong>OTDR (Optical TDR):</strong> The same thing, but for Fiber. Finds breaks and dirty splices.</li>
            <li><strong>Light Meter:</strong> Measures the power of the light at the end of a fiber cable. Used to test for signal loss (dB loss).</li>
            <li><strong>Loopback Plug:</strong> Plugs into a port to trick the computer into thinking it's connected. Used to test the NIC hardware itself.</li>
          </ul>
        `,
        quiz: { question: "You need to locate a specific cable in a disorganized server closet. Which tool should you use?", options: ["Crimper", "TDR", "Tone Generator & Probe", "Multimeter"], correctAnswer: 2, explanation: "A Tone Generator sends a signal down the wire, and the Probe allows you to hear it, helping you identify the specific cable." }
      }
    ]
  },

  // ==========================================
  // MODULE 4: ETHERNET SWITCHING
  // ==========================================
  {
    id: "mod-4",
    title: "Module 4: Ethernet Switching",
    description: "Layer 2 logic, Frames, and MACs.",
    topics: [
      {
        id: "t-4-1",
        title: "4.1 MAC Addresses",
        content: `
          <h3>The Physical ID</h3>
          <p>A <strong>Media Access Control (MAC)</strong> address is the unique physical identifier assigned to a network interface controller (NIC) for use as a network address in communications within a network segment. Unlike IP addresses, which are logical and can change, a MAC address is permanent and "burned in" to the hardware.</p>
          
          <div class="concept-card">
            <h4>Structure of a MAC Address</h4>
            <p>A MAC address is <strong>48 bits</strong> (6 bytes) long, typically written in Hexadecimal format (e.g., <code>00:1A:2B:3C:4D:5E</code>). It is split into two equal parts:</p>
            <ul>
              <li><strong>OUI (Organizationally Unique Identifier):</strong> The first 24 bits (first 3 bytes). This identifies the manufacturer (e.g., Cisco, Dell, Apple). It is assigned by the IEEE.</li>
              <li><strong>Device ID (Network Interface Controller Specific):</strong> The last 24 bits (last 3 bytes). This is a unique serial number assigned by the manufacturer.</li>
            </ul>
          </div>

          <p><strong>Types of MAC Addresses:</strong></p>
          <ul>
            <li><strong>Unicast:</strong> Addressed to a single specific device. (e.g., <code>00:11:22:33:44:55</code>).</li>
            <li><strong>Broadcast:</strong> Addressed to EVERY device on the segment. The address is all Fs: <code>FF:FF:FF:FF:FF:FF</code>.</li>
            <li><strong>Multicast:</strong> Addressed to a group of devices. In IPv4, these start with <code>01:00:5E</code>.</li>
          </ul>
        `,
        quiz: { question: "Which part of a MAC address identifies the manufacturer of the network card?", options: ["The last 24 bits", "The OUI (first 24 bits)", "The IP header", "The CRC trailer"], correctAnswer: 1, explanation: "The Organizationally Unique Identifier (OUI) comprises the first 24 bits of the MAC address and is assigned to the manufacturer." }
      },
      {
        id: "t-4-2",
        title: "4.2 Switch Logic",
        content: `
          <h3>How Switches Think</h3>
          <p>A switch is a Layer 2 device that intelligently forwards frames based on MAC addresses. Unlike a Hub (which is dumb and sends everything everywhere), a Switch learns where devices are located.</p>
          
          <div class="concept-card">
            <h4>The Forwarding Process</h4>
            <ol>
              <li>
                <strong>Learn (Source MAC):</strong> When a frame enters a port, the switch looks at the <strong>Source MAC</strong> address. It records the MAC and the Port Number in its <strong>MAC Address Table</strong> (CAM Table). It now knows "Computer A is on Port 1".
              </li>
              <li>
                <strong>Forward (Destination MAC):</strong> The switch then looks at the <strong>Destination MAC</strong>.
                <ul>
                  <li>If the destination is in the table, it sends the frame <strong>ONLY</strong> to that specific port (Unicast).</li>
                  <li>If the destination is <strong>NOT</strong> in the table (Unknown Unicast), it <strong>Floods</strong> the frame out all ports except the one it came in on.</li>
                  <li>If the destination is the Broadcast Address (FF:FF:FF:FF:FF:FF), it <strong>Floods</strong> it out all ports.</li>
                </ul>
              </li>
              <li>
                <strong>Filter:</strong> The switch ensures that a frame is never sent back out the same port it arrived on.
              </li>
            </ol>
          </div>

          <p><strong>Aging:</strong> MAC table entries don't last forever. If a device is silent for a certain period (default is usually 300 seconds / 5 minutes), the switch removes the entry to keep the table clean.</p>
        `,
        quiz: { question: "What action does a switch take when it receives a frame with a Destination MAC address that is NOT in its MAC Address Table?", options: ["Drop the frame", "Send it to the default gateway", "Flood it out all ports except the source", "Send an ARP request"], correctAnswer: 2, explanation: "This is known as 'Unknown Unicast Flooding'. The switch floods the frame to ensure it reaches the destination, which will then reply, allowing the switch to learn its location." }
      },
      {
        id: "t-4-3",
        title: "4.3 Broadcast Domains",
        content: `
          <h3>Stopping the Noise</h3>
          <p>Understanding the boundaries of network traffic is essential for performance and security.</p>
          
          <div class="concept-card">
            <h4>Collision vs. Broadcast Domains</h4>
            <ul>
              <li>
                <strong>Collision Domain:</strong>
                <br>This is a network segment where data packets can collide with one another.
                <br><em>Hubs:</em> The entire hub is ONE collision domain (only one device can talk at a time).
                <br><em>Switches:</em> <strong>Each Port</strong> is its own separate collision domain. This eliminates collisions and allows full-duplex communication.
              </li>
              <li>
                <strong>Broadcast Domain:</strong>
                <br>This is the set of all devices that receive broadcast frames originating from any device within the set.
                <br><em>Switches:</em> By default, a switch connects everyone into <strong>ONE</strong> large broadcast domain. If Computer A shouts, everyone connected to the switch hears it.
                <br><em>Routers:</em> <strong>Routers break broadcast domains.</strong> They do not forward broadcast packets (255.255.255.255). Each interface on a router represents a separate broadcast domain.
              </li>
            </ul>
          </div>
          
          <p><strong>Why does this matter?</strong> Too many broadcasts (Broadcast Storms) can cripple a network's CPU. We use Routers and VLANs to segment the network into smaller broadcast domains to improve performance.</p>
        `,
        quiz: { question: "Which device is used to separate a network into multiple Broadcast Domains?", options: ["Switch", "Hub", "Repeater", "Router"], correctAnswer: 3, explanation: "Routers (Layer 3) stop broadcast traffic, effectively creating boundaries between different broadcast domains." }
      },
      {
        id: "t-4-4",
        title: "4.4 ARP (Address Resolution Protocol)",
        content: `
          <h3>The Glue Between Layers 2 and 3</h3>
          <p>We humans use Hostnames (google.com). Computers use IP addresses (142.250.x.x) for routing. But ultimately, the hardware (NICs) needs MAC addresses to send frames over the wire. <strong>ARP</strong> is the protocol that translates a known IP address into an unknown MAC address.</p>
          
          <div class="concept-card">
            <h4>The ARP Process</h4>
            <ol>
              <li>
                <strong>Request:</strong> Computer A wants to talk to 192.168.1.5 but doesn't know its MAC. It shouts a <strong>Broadcast</strong> message: "Who has 192.168.1.5? Tell 192.168.1.10!"
              </li>
              <li>
                <strong>Reply:</strong> Computer B (192.168.1.5) hears the shout. It replies with a <strong>Unicast</strong> message: "I am 192.168.1.5, and my MAC is BB:BB:BB:BB:BB:BB."
              </li>
              <li>
                <strong>Cache:</strong> Computer A saves this mapping in its <strong>ARP Table</strong> (ARP Cache) so it doesn't have to ask again for a while.
              </li>
            </ol>
          </div>

          <p><strong>Command:</strong> Run <code>arp -a</code> in your command prompt to see your computer's current ARP cache.</p>
          <p><strong>Security Risk:</strong> ARP is trusting. Attackers can send fake ARP replies (ARP Spoofing/Poisoning) to trick computers into sending data to the attacker instead of the router (Man-in-the-Middle attack).</p>
        `,
        quiz: { question: "What command displays the current IP-to-MAC address mappings on a Windows computer?", options: ["ipconfig", "ping", "arp -a", "netstat"], correctAnswer: 2, explanation: "The 'arp -a' command displays the ARP cache, showing all known IP-to-MAC address resolutions." }
      }
    ]
  },

  // ==========================================
  // MODULE 5: ADVANCED SWITCHING
  // ==========================================
  {
    id: "mod-5",
    title: "Module 5: Advanced Switching",
    description: "VLANs, Trunks, STP, and PoE.",
    topics: [
      {
        id: "t-5-1",
        title: "5.1 VLANs (Virtual LANs)",
        content: `
          <h3>Logical Separation</h3>
          <p>A <strong>VLAN (Virtual Local Area Network)</strong> allows you to logically separate a single physical switch into multiple isolated networks. It's like taking one office building and using keycards to ensure the Sales team can't enter the Engineering room, even though they are in the same building.</p>
          
          <div class="concept-card">
            <h4>Why use VLANs?</h4>
            <ul>
              <li><strong>Security:</strong> Sensitive data (Finance) is isolated from public traffic (Guest Wi-Fi).</li>
              <li><strong>Performance:</strong> VLANs break up Broadcast Domains. Broadcasts from VLAN 10 stay in VLAN 10 and don't clutter VLAN 20.</li>
              <li><strong>Organization:</strong> You can group users by department (HR, IT, Sales) rather than by physical location.</li>
            </ul>
          </div>

          <p><strong>Inter-VLAN Routing:</strong> By default, VLANs cannot talk to each other. To allow communication (e.g., if IT needs to fix a Sales computer), you need a Layer 3 device (Router or Layer 3 Switch) to route traffic between them.</p>
        `,
        quiz: { question: "What is the primary benefit of using VLANs to segment a network?", options: ["Increases internet speed", "Reduces the size of broadcast domains", "Eliminates the need for routers", "Encrypts all traffic"], correctAnswer: 1, explanation: "VLANs segment the network into smaller broadcast domains, improving performance and security by containing broadcast traffic." }
      },
      {
        id: "t-5-2",
        title: "5.2 Trunking (802.1Q)",
        content: `
          <h3>The Multi-Lane Highway</h3>
          <p>If you have VLAN 10 and VLAN 20 on Switch A, and you want to connect them to Switch B, you don't run two separate cables. You run a single <strong>Trunk Link</strong>.</p>
          
          <div class="concept-card">
            <h4>Access vs. Trunk Ports</h4>
            <ul>
              <li><strong>Access Port:</strong> Connects to an end device (PC, Printer). It belongs to <strong>ONE</strong> specific VLAN. The frames are untagged (the PC doesn't know about VLANs).</li>
              <li><strong>Trunk Port:</strong> Connects to another switch or router. It carries traffic for <strong>ALL</strong> VLANs. It adds a "Tag" to every frame so the receiving switch knows which VLAN it belongs to.</li>
            </ul>
          </div>

          <p><strong>802.1Q (Dot1q):</strong> The industry standard protocol for tagging frames. It inserts a 4-byte tag into the Ethernet header.</p>
          <p><strong>Native VLAN:</strong> A special VLAN on a trunk (usually VLAN 1) where frames are NOT tagged. Both ends of the trunk must agree on the Native VLAN, or you get "VLAN Hopping" security risks.</p>
        `,
        quiz: { question: "Which type of switch port is configured to carry traffic for multiple VLANs simultaneously?", options: ["Access Port", "Trunk Port", "Console Port", "Management Port"], correctAnswer: 1, explanation: "A Trunk port is designed to carry tagged frames for multiple VLANs between switches." }
      },
      {
        id: "t-5-3",
        title: "5.3 Spanning Tree Protocol (STP)",
        content: `
          <h3>Stopping the Loop of Death</h3>
          <p>Redundancy is good—you want backup cables. But in Layer 2, if you connect two switches with two cables, you create a loop. Broadcast frames will spin around this loop forever, multiplying until they crash the network (Broadcast Storm).</p>
          
          <div class="concept-card">
            <h4>How STP Works (802.1D)</h4>
            <ol>
              <li><strong>Elect a Root Bridge:</strong> The switches hold an election. The one with the lowest "Bridge ID" (Priority + MAC Address) wins and becomes the boss (Root Bridge).</li>
              <li><strong>Find the Best Path:</strong> Every other switch calculates the shortest path (lowest cost based on speed) to the Root Bridge. This is the "Root Port".</li>
              <li><strong>Block the Rest:</strong> Any redundant links that aren't the best path are put into a <strong>Blocking State</strong>. They sit there waiting. If the main link fails, they unblock and take over.</li>
            </ol>
          </div>

          <p><strong>RSTP (802.1w):</strong> Rapid Spanning Tree. The modern version. It converges (recovers) in seconds instead of the 30-50 seconds of classic STP.</p>
        `,
        quiz: { question: "What happens if you connect two switches with redundant cables without enabling STP?", options: ["Load Balancing", "Broadcast Storm / Switching Loop", "Faster speeds", "Automatic Failover"], correctAnswer: 1, explanation: "Without STP, broadcast frames circulate endlessly in the loop, consuming all bandwidth and crashing the network." }
      },
      {
        id: "t-5-4",
        title: "5.4 Power over Ethernet (PoE)",
        content: `
          <h3>One Cable to Rule Them All</h3>
          <p>PoE allows you to send electrical power and data over the same twisted-pair Ethernet cable. This is perfect for devices mounted on ceilings or walls where there are no power outlets.</p>
          
          <div class="concept-card">
            <h4>PoE Standards (Memorize the Watts)</h4>
            <table class="data-table">
              <tr><th>Standard</th><th>Name</th><th>Max Power (Source)</th><th>Typical Devices</th></tr>
              <tr><td><strong>802.3af</strong></td><td>PoE</td><td>15.4 W</td><td>VoIP Phones, Basic IP Cameras</td></tr>
              <tr><td><strong>802.3at</strong></td><td>PoE+</td><td>30 W</td><td>Wi-Fi 5/6 APs, PTZ Cameras</td></tr>
              <tr><td><strong>802.3bt</strong></td><td>PoE++</td><td>60 W / 100 W</td><td>Laptops, Digital Signage, TVs</td></tr>
            </table>
          </div>

          <p><strong>PSE vs. PD:</strong>
          <br><strong>PSE (Power Sourcing Equipment):</strong> The switch or injector that sends the power.
          <br><strong>PD (Powered Device):</strong> The camera or phone that consumes the power.</p>
        `,
        quiz: { question: "You are deploying Wi-Fi 6 Access Points that require 25 Watts of power. Which PoE standard must your switch support?", options: ["802.3af", "802.3at", "Passive PoE", "Non-PoE"], correctAnswer: 1, explanation: "802.3at (PoE+) provides up to 30 Watts, which is sufficient. 802.3af only provides 15.4 Watts." }
      }
    ]
  },

  // ==========================================
  // MODULE 6: IPv4 ADDRESSING
  // ==========================================
  {
    id: "mod-6",
    title: "Module 6: IPv4 Addressing",
    description: "Subnetting, Classes, and Binary.",
    topics: [
      {
        id: "t-6-1",
        title: "6.1 IPv4 Basics",
        content: `
          <h3>The Digital Address</h3>
          <p>An <strong>IPv4 Address</strong> is a 32-bit number that uniquely identifies a device on a network. Because humans are bad at reading binary (e.g., <code>11000000101010000000000100000001</code>), we write it in <strong>Dotted Decimal Notation</strong> (e.g., <code>192.168.1.1</code>).</p>
          
          <div class="concept-card">
            <h4>Anatomy of an IP Address</h4>
            <p>An IP address has two parts, defined by the <strong>Subnet Mask</strong>:</p>
            <ul>
              <li><strong>Network ID:</strong> Identifies the street (Network). All devices on the same LAN must have the same Network ID.</li>
              <li><strong>Host ID:</strong> Identifies the house number (Specific Device). Every device on the LAN must have a unique Host ID.</li>
            </ul>
            <p><em>Example:</em> IP 192.168.1.5 with Mask 255.255.255.0 (/24).
            <br><strong>Network:</strong> 192.168.1.x
            <br><strong>Host:</strong> .5</p>
          </div>
        `,
        quiz: { question: "How many bits are in an IPv4 address?", options: ["32", "48", "64", "128"], correctAnswer: 0, explanation: "IPv4 uses 32-bit addresses, typically represented as four decimal numbers separated by dots." }
      },
      {
        id: "t-6-2",
        title: "6.2 Private IPs (RFC 1918)",
        content: `
          <h3>Internal vs. External</h3>
          <p>Not every IP address can go on the internet. <strong>Public IPs</strong> are routable on the internet and cost money. <strong>Private IPs</strong> are free to use inside your home or business but cannot be routed over the internet.</p>
          
          <div class="concept-card">
            <h4>The 3 Private Ranges (Memorize These)</h4>
            <ul>
              <li><strong>Class A:</strong> <code>10.0.0.0</code> to <code>10.255.255.255</code> (Big networks).</li>
              <li><strong>Class B:</strong> <code>172.16.0.0</code> to <code>172.31.255.255</code> (Medium networks).</li>
              <li><strong>Class C:</strong> <code>192.168.0.0</code> to <code>192.168.255.255</code> (Home/Small Office).</li>
            </ul>
          </div>

          <p><strong>NAT (Network Address Translation):</strong> Since Private IPs can't go on the internet, your router translates your private IP (192.168.1.5) to its single Public IP (e.g., 82.14.5.6) when you browse the web.</p>
        `,
        quiz: { question: "Which of the following is a Private IP address?", options: ["8.8.8.8", "172.20.5.1", "11.0.0.1", "192.169.1.1"], correctAnswer: 1, explanation: "172.20.5.1 falls within the Class B private range (172.16.x.x - 172.31.x.x)." }
      },
      {
        id: "t-6-3",
        title: "6.3 APIPA",
        content: `
          <h3>The "I Failed" Address</h3>
          <p><strong>APIPA (Automatic Private IP Addressing)</strong> is a fallback mechanism. If a computer is configured to get an IP from a DHCP server but cannot find one, it assigns itself a random address from the APIPA range.</p>
          
          <div class="concept-card">
            <h4>Identifying APIPA</h4>
            <p><strong>Range:</strong> <code>169.254.x.x</code></p>
            <p><strong>Symptoms:</strong> You can talk to other computers on the same switch (if they also have APIPA addresses), but you <strong>cannot</strong> get on the internet.</p>
          </div>

          <p><em>Troubleshooting Tip:</em> If you see a 169.254 address, the problem is DHCP (Server down, cable unplugged, or scope full).</p>
        `,
        quiz: { question: "A user reports no internet access. You check their IP and see 169.254.12.4. What is the cause?", options: ["DNS Failure", "DHCP Failure", "Gateway Failure", "Duplicate IP"], correctAnswer: 1, explanation: "An IP starting with 169.254 indicates the device failed to contact a DHCP server and auto-assigned an APIPA address." }
      },
      {
        id: "t-6-4",
        title: "6.4 CIDR & Subnetting",
        content: `
          <h3>Classless Inter-Domain Routing</h3>
          <p>We used to have strict Classes (A, B, C). Now we use <strong>CIDR</strong> (Slash Notation) to be more flexible. The "Slash" number tells you how many bits are used for the Network ID.</p>
          
          <div class="concept-card">
            <h4>Common CIDR Notations</h4>
            <ul>
              <li><strong>/24 (255.255.255.0):</strong> 254 Hosts. Standard LAN.</li>
              <li><strong>/25 (255.255.255.128):</strong> 126 Hosts. Splits a /24 in half.</li>
              <li><strong>/26 (255.255.255.192):</strong> 62 Hosts. Splits a /24 into quarters.</li>
              <li><strong>/30 (255.255.255.252):</strong> 2 Hosts. Used for Point-to-Point links between routers.</li>
            </ul>
          </div>

          <p><strong>Formula for Hosts:</strong> 2^(HostBits) - 2.
          <br><em>Why minus 2?</em> You lose one for the Network Address (first) and one for the Broadcast Address (last).</p>
        `,
        quiz: { question: "How many usable host IP addresses are available in a /30 subnet?", options: ["2", "4", "6", "30"], correctAnswer: 0, explanation: "A /30 leaves 2 bits for hosts. 2^2 = 4. Subtract 2 (Network + Broadcast) = 2 usable IPs." }
      }
    ]
  },

  // ==========================================
  // MODULE 7: IPv6 ADDRESSING
  // ==========================================
  {
    id: "mod-7",
    title: "Module 7: IPv6 Addressing",
    description: "128-bit future proofing.",
    topics: [
      {
        id: "t-7-1",
        title: "7.1 IPv6 Format",
        content: `
          <h3>128 Bits of Future Proofing</h3>
          <p>We ran out of IPv4 addresses. <strong>IPv6</strong> solves this by using 128-bit addresses, providing 340 undecillion addresses (enough for every grain of sand on Earth).</p>
          
          <div class="concept-card">
            <h4>Reading Hexadecimal</h4>
            <p>IPv6 uses 8 groups of 4 Hexadecimal characters, separated by colons.</p>
            <p><em>Example:</em> <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code></p>
            <h4>Shortening Rules (Compression)</h4>
            <ol>
              <li><strong>Leading Zeros:</strong> You can remove zeros at the start of a group. <code>0db8</code> becomes <code>db8</code>.</li>
              <li><strong>Zero Compression:</strong> You can replace ONE contiguous block of zeros with a double colon <code>::</code>. (You can only do this once!).</li>
            </ol>
            <p><em>Compressed:</em> <code>2001:db8:85a3::8a2e:370:7334</code></p>
          </div>
        `,
        quiz: { question: "How many bits are in an IPv6 address?", options: ["32", "64", "128", "256"], correctAnswer: 2, explanation: "IPv6 uses 128-bit addresses, represented in hexadecimal." }
      },
      {
        id: "t-7-2",
        title: "7.2 IPv6 Address Types",
        content: `
          <h3>No More Broadcasts</h3>
          <p>IPv6 does not use Broadcasts. Instead, it relies heavily on Multicast.</p>
          
          <div class="concept-card">
            <h4>Common Address Types</h4>
            <ul>
              <li><strong>Unicast (One-to-One):</strong>
                <br>- <em>Global Unicast:</em> Starts with <code>2000::/3</code>. Routable on the internet (Public IP).
                <br>- <em>Link-Local:</em> Starts with <code>fe80::/10</code>. Mandatory on every interface. Only works on the local LAN (like APIPA but permanent).
                <br>- <em>Unique Local:</em> Starts with <code>fc00::/7</code>. Private IP equivalent.
              </li>
              <li><strong>Multicast (One-to-Many):</strong> Starts with <code>ff00::/8</code>. Sends data to a specific group of devices.</li>
              <li><strong>Anycast (One-to-Nearest):</strong> Multiple servers share the same IP. The network routes you to the closest one (used by DNS/CDN).</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which IPv6 address type must be present on every interface and starts with fe80::?", options: ["Global Unicast", "Unique Local", "Link-Local", "Multicast"], correctAnswer: 2, explanation: "Link-Local addresses (fe80::) are mandatory for local communication and Neighbor Discovery." }
      },
      {
        id: "t-7-3",
        title: "7.3 Auto-Configuration (SLAAC)",
        content: `
          <h3>Plug and Play</h3>
          <p>IPv6 is designed to be self-configuring. You don't strictly need a DHCP server.</p>
          
          <div class="concept-card">
            <h4>SLAAC (Stateless Address Auto Configuration)</h4>
            <p>Devices can generate their own full Global IP address without a DHCP server.</p>
            <ol>
              <li><strong>RS (Router Solicitation):</strong> PC asks "Is there a router here?"</li>
              <li><strong>RA (Router Advertisement):</strong> Router says "Yes, I am here. My prefix is 2001:db8::/64".</li>
              <li><strong>Auto-Config:</strong> PC takes the prefix (2001:db8::) and adds its own unique Interface ID to the end to make a full 128-bit address.</li>
            </ol>
          </div>

          <p><strong>NDP (Neighbor Discovery Protocol):</strong> Replaces ARP. Uses ICMPv6 to find MAC addresses (Neighbor Solicitation/Advertisement).</p>
        `,
        quiz: { question: "Which protocol does IPv6 use to resolve IP addresses to MAC addresses, replacing ARP?", options: ["DHCPv6", "NDP", "IGMP", "OSPFv3"], correctAnswer: 1, explanation: "NDP (Neighbor Discovery Protocol) handles address resolution (finding MACs) in IPv6." }
      },
      {
        id: "t-7-4",
        title: "7.4 EUI-64",
        content: `
          <h3>Making a Unique ID</h3>
          <p>How does a device generate a unique Interface ID for SLAAC? One method is <strong>EUI-64</strong>.</p>
          
          <div class="concept-card">
            <h4>The EUI-64 Process</h4>
            <p>It takes the device's 48-bit MAC address and stretches it to 64 bits.</p>
            <ol>
              <li>Split the MAC address in half (24 bits | 24 bits).</li>
              <li>Insert <code>FFFE</code> in the middle.</li>
              <li>Flip the 7th bit of the first byte (Universal/Local bit).</li>
            </ol>
            <p><em>Result:</em> A 64-bit Interface ID that is globally unique (because the MAC was unique).</p>
          </div>
        `,
        quiz: { question: "What value is inserted into the middle of a MAC address to create an EUI-64 Interface ID?", options: ["FFFF", "0000", "FFFE", "ABCD"], correctAnswer: 2, explanation: "FFFE is inserted into the middle of the 48-bit MAC to create a 64-bit EUI-64 identifier." }
      }
    ]
  },

  // ==========================================
  // MODULE 8: IP ROUTING
  // ==========================================
  {
    id: "mod-8",
    title: "Module 8: IP Routing",
    description: "Moving packets between networks.",
    topics: [
      {
        id: "t-8-1",
        title: "8.1 Routing Logic",
        content: `
          <h3>The GPS of the Internet</h3>
          <p>A <strong>Router</strong> is like a traffic cop or a GPS. Its only job is to move packets from one network to another. It doesn't care about the data inside (email, video, game); it only cares about the <strong>Destination IP Address</strong>.</p>
          
          <div class="concept-card">
            <h4>How a Router Decides</h4>
            <p>When a packet arrives, the router looks at its <strong>Routing Table</strong>. It follows the rule of <strong>Longest Prefix Match</strong>.</p>
            <ul>
              <li><strong>Route A:</strong> 10.0.0.0/8 (Matches the first 8 bits).</li>
              <li><strong>Route B:</strong> 10.1.1.0/24 (Matches the first 24 bits).</li>
            </ul>
            <p><em>Scenario:</em> Packet destined for 10.1.1.5 arrives.
            <br><em>Decision:</em> Both routes match, but Route B is more specific (longer prefix). The router chooses Route B.</p>
          </div>
        `,
        quiz: { question: "If a router has two routes to a destination (10.0.0.0/8 and 10.1.1.0/24), which one does it choose for a packet destined to 10.1.1.5?", options: ["The oldest one", "The one with the longest prefix match (/24)", "The one with the highest metric", "The one manually configured"], correctAnswer: 1, explanation: "The Longest Prefix Match (most specific route) is always preferred. /24 is longer (more specific) than /8." }
      },
      {
        id: "t-8-2",
        title: "8.2 Static vs Dynamic",
        content: `
          <h3>Manual vs. Autopilot</h3>
          <p>How do routes get into the routing table?</p>
          
          <div class="concept-card">
            <h4>Static Routing (Manual)</h4>
            <p>The Network Admin types every route by hand.
            <br><em>Pros:</em> Secure, precise, no CPU overhead.
            <br><em>Cons:</em> Does not scale. If a link breaks, the admin must manually fix it.
            <br><em>AD (Trustworthiness):</em> 1 (Very High).</p>
          </div>

          <div class="concept-card">
            <h4>Dynamic Routing (Autopilot)</h4>
            <p>Routers talk to each other using protocols (OSPF, BGP) to share maps.
            <br><em>Pros:</em> Scalable. Automatically routes around failures.
            <br><em>Cons:</em> Uses CPU and bandwidth.
            <br><em>AD:</em> OSPF (110), RIP (120).</p>
          </div>

          <p><strong>Default Route (Gateway of Last Resort):</strong> <code>0.0.0.0/0</code>. Matches everything. "If you don't know where to send it, send it to the ISP."</p>
        `,
        quiz: { question: "Which route is known as the 'Gateway of Last Resort' and matches all traffic not specifically listed in the routing table?", options: ["127.0.0.1", "255.255.255.255", "0.0.0.0/0", "192.168.1.1"], correctAnswer: 2, explanation: "0.0.0.0/0 is the default route, used when no other specific route matches the destination." }
      },
      {
        id: "t-8-3",
        title: "8.3 OSPF (Open Shortest Path First)",
        content: `
          <h3>The Interior Map Maker</h3>
          <p><strong>OSPF</strong> is the most common IGP (Interior Gateway Protocol) for large enterprise networks. It's a <strong>Link-State</strong> protocol, meaning every router builds a complete map (topology) of the network.</p>
          
          <div class="concept-card">
            <h4>OSPF Key Concepts</h4>
            <ul>
              <li><strong>Metric:</strong> Cost (Based on Bandwidth). Faster links = Lower Cost = Better.</li>
              <li><strong>Area 0 (Backbone):</strong> The core area. All other areas (Area 1, Area 51) must connect to Area 0 to prevent loops.</li>
              <li><strong>LSA (Link State Advertisement):</strong> The "Hello" packets routers send to share info.</li>
            </ul>
          </div>
        `,
        quiz: { question: "In an OSPF network, what is the special name given to Area 0?", options: ["The Stub Area", "The Backbone Area", "The NSSA", "The Transit Area"], correctAnswer: 1, explanation: "Area 0 is the Backbone Area. All inter-area traffic must pass through it to prevent routing loops." }
      },
      {
        id: "t-8-4",
        title: "8.4 BGP (Border Gateway Protocol)",
        content: `
          <h3>The Protocol of the Internet</h3>
          <p><strong>BGP</strong> is the only EGP (Exterior Gateway Protocol) in use today. It routes traffic between different organizations, known as <strong>Autonomous Systems (AS)</strong>.</p>
          
          <div class="concept-card">
            <h4>Why BGP?</h4>
            <p>OSPF finds the <em>fastest</em> path. BGP finds the <em>allowed</em> path. It's based on policies (politics and money), not just speed.</p>
            <p><em>Example:</em> "Send traffic through ISP A because it's cheaper, even if ISP B is faster."</p>
            <p><strong>Hybrid Routing:</strong> It's a Path-Vector protocol. It counts the number of AS hops to the destination.</p>
          </div>
        `,
        quiz: { question: "Which protocol is used to route traffic between different Autonomous Systems (AS) across the Internet?", options: ["OSPF", "BGP", "RIP", "EIGRP"], correctAnswer: 1, explanation: "BGP (Border Gateway Protocol) is the standard protocol for routing between different organizations (AS) on the internet." }
      }
    ]
  },

  // ==========================================
  // MODULE 9: CORE SERVICES
  // ==========================================
  {
    id: "mod-9",
    title: "Module 9: Core Network Services",
    description: "DHCP, DNS, NTP.",
    topics: [
      {
        id: "t-9-1",
        title: "9.1 DHCP (Dynamic Host Configuration Protocol)",
        content: `
          <h3>The Automatic IP Giver</h3>
          <p>Imagine walking into a conference. You don't pick your own seat number; the receptionist assigns you one. <strong>DHCP</strong> is that receptionist. It automatically assigns IP addresses, Subnet Masks, Gateways, and DNS servers to clients so they can join the network without manual configuration.</p>
          
          <div class="concept-card">
            <h4>The DORA Process (Memorize This)</h4>
            <ol>
              <li><strong>Discover:</strong> The Client shouts (Broadcast) "Is there a DHCP server out there?"</li>
              <li><strong>Offer:</strong> The Server hears it and says (Unicast/Broadcast) "Yes! Here is an IP: 192.168.1.50".</li>
              <li><strong>Request:</strong> The Client says "Great, I'll take 192.168.1.50".</li>
              <li><strong>Acknowledge:</strong> The Server says "Confirmed. It's yours for 24 hours (Lease Time)".</li>
            </ol>
          </div>

          <p><strong>DHCP Relay (IP Helper):</strong> DHCP Discover messages are Broadcasts. Routers block Broadcasts. If your DHCP server is on a different subnet, you need a <strong>DHCP Relay Agent</strong> on the router to forward the request.</p>
        `,
        quiz: { question: "Which step of the DHCP DORA process involves the client accepting the IP address offered by the server?", options: ["Discover", "Offer", "Request", "Acknowledge"], correctAnswer: 2, explanation: "In the Request step, the client formally requests to use the IP address that was offered by the server." }
      },
      {
        id: "t-9-2",
        title: "9.2 DNS (Domain Name System)",
        content: `
          <h3>The Phonebook of the Internet</h3>
          <p>Computers speak numbers (IPs). Humans speak names (google.com). <strong>DNS</strong> translates names into numbers.</p>
          
          <div class="concept-card">
            <h4>Common DNS Records</h4>
            <ul>
              <li><strong>A Record:</strong> Maps a Hostname to an <strong>IPv4</strong> Address. (google.com -> 142.250.1.1).</li>
              <li><strong>AAAA Record:</strong> Maps a Hostname to an <strong>IPv6</strong> Address. (Quad-A).</li>
              <li><strong>CNAME (Canonical Name):</strong> An alias. (www.google.com -> google.com).</li>
              <li><strong>MX (Mail Exchange):</strong> Points to the Email Server. Essential for receiving email.</li>
              <li><strong>PTR (Pointer):</strong> Reverse DNS. Maps an IP to a Hostname.</li>
            </ul>
          </div>
          
          <p><strong>Hierarchy:</strong> Root (.) -> TLD (.com) -> Domain (google) -> Subdomain (mail).</p>
        `,
        quiz: { question: "Which DNS record type is used to map a Hostname to an IPv6 address?", options: ["A", "AAAA", "MX", "CNAME"], correctAnswer: 1, explanation: "AAAA (Quad-A) records are specifically for mapping hostnames to 128-bit IPv6 addresses." }
      },
      {
        id: "t-9-3",
        title: "9.3 NTP (Network Time Protocol)",
        content: `
          <h3>Getting Everyone in Sync</h3>
          <p><strong>NTP</strong> (UDP Port 123) ensures every device on the network agrees on the exact time.</p>
          
          <div class="concept-card">
            <h4>Why is Time Sync Critical?</h4>
            <ul>
              <li><strong>Security (Kerberos):</strong> Authentication tickets have a timestamp. If your clock is off by more than 5 minutes, you can't log in.</li>
              <li><strong>Log Analysis:</strong> If a server crashes at 10:00 and the firewall shows an attack at 10:05, but their clocks are 10 minutes apart, you'll never correlate the events.</li>
              <li><strong>Backups:</strong> Scheduled backups rely on accurate time.</li>
            </ul>
          </div>
          
          <p><strong>Stratum Layers:</strong> Stratum 0 is the atomic clock. Stratum 1 connects to Stratum 0. Stratum 2 connects to Stratum 1, and so on.</p>
        `,
        quiz: { question: "Why is accurate time synchronization (NTP) critical for security protocols like Kerberos?", options: ["It isn't", "Kerberos uses time-stamped tickets to prevent replay attacks", "It speeds up encryption", "It saves battery"], correctAnswer: 1, explanation: "Kerberos relies on time-stamps to prevent replay attacks. If the clock skew is too large (typically >5 mins), authentication fails." }
      }
    ]
  },

  // ==========================================
  // MODULE 10: TRANSPORT PROTOCOLS
  // ==========================================
  {
    id: "mod-10",
    title: "Module 10: Transport Protocols",
    description: "TCP vs UDP and Port Numbers.",
    topics: [
      {
        id: "t-10-1",
        title: "10.1 TCP vs UDP",
        diagram: "tcp-handshake",
        content: `
          <h3>Reliable vs. Fast</h3>
          <p>At Layer 4 (Transport), we have two main ways to send data. Think of them as shipping methods.</p>
          
          <div class="concept-card">
            <h4>TCP (Transmission Control Protocol)</h4>
            <p><strong>"Certified Mail"</strong></p>
            <ul>
              <li><strong>Connection-Oriented:</strong> Must establish a connection first (3-Way Handshake).</li>
              <li><strong>Reliable:</strong> Guaranteed delivery. If a packet is lost, it is resent.</li>
              <li><strong>Ordered:</strong> Packets are numbered and reassembled in order.</li>
              <li><strong>Heavy:</strong> Slower due to overhead. Used for Web (HTTP), Email (SMTP), File Transfer (FTP).</li>
            </ul>
          </div>

          <div class="concept-card">
            <h4>UDP (User Datagram Protocol)</h4>
            <p><strong>"Regular Mail" (or throwing a brick)</strong></p>
            <ul>
              <li><strong>Connectionless:</strong> Just sends data. No handshake.</li>
              <li><strong>Unreliable:</strong> No guarantee. If it's lost, it's gone.</li>
              <li><strong>Fast:</strong> Low overhead. Used for Streaming (Voice/Video), DNS, DHCP, Gaming.</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which protocol is connection-oriented and guarantees delivery of data?", options: ["UDP", "TCP", "ICMP", "IP"], correctAnswer: 1, explanation: "TCP (Transmission Control Protocol) is connection-oriented and ensures reliable delivery through acknowledgments." }
      },
      {
        id: "t-10-2",
        title: "10.2 Common Ports (Web/File)",
        content: `
          <h3>The Digital Doors</h3>
          <p>An IP address gets you to the right computer. A <strong>Port Number</strong> gets you to the right application/service on that computer.</p>
          
          <div class="concept-card">
            <h4>Memorize These Ports (Web & Files)</h4>
            <table class="data-table">
              <tr><th>Port</th><th>Protocol</th><th>Use</th></tr>
              <tr><td><strong>20/21</strong></td><td>FTP</td><td>File Transfer (20=Data, 21=Control)</td></tr>
              <tr><td><strong>22</strong></td><td>SSH</td><td>Secure Shell (Encrypted Remote CLI)</td></tr>
              <tr><td><strong>23</strong></td><td>Telnet</td><td>Unencrypted Remote CLI (Don't use!)</td></tr>
              <tr><td><strong>80</strong></td><td>HTTP</td><td>Unsecured Web Browsing</td></tr>
              <tr><td><strong>443</strong></td><td>HTTPS</td><td>Secured Web Browsing (SSL/TLS)</td></tr>
              <tr><td><strong>445</strong></td><td>SMB</td><td>Windows File Sharing</td></tr>
            </table>
          </div>
        `,
        quiz: { question: "Which port is used for secure web browsing (HTTPS)?", options: ["80", "443", "8080", "22"], correctAnswer: 1, explanation: "HTTPS uses TCP port 443. HTTP uses port 80." }
      },
      {
        id: "t-10-3",
        title: "10.3 Common Ports (Email/Infra)",
        content: `
          <h3>More Digital Doors</h3>
          <p>You need to know these for the exam and for configuring firewalls.</p>
          
          <div class="concept-card">
            <h4>Memorize These Ports (Email & Infra)</h4>
            <table class="data-table">
              <tr><th>Port</th><th>Protocol</th><th>Use</th></tr>
              <tr><td><strong>25</strong></td><td>SMTP</td><td>Sending Email (Server to Server)</td></tr>
              <tr><td><strong>53</strong></td><td>DNS</td><td>Name Resolution (UDP/TCP)</td></tr>
              <tr><td><strong>67/68</strong></td><td>DHCP</td><td>Auto IP Assignment (UDP)</td></tr>
              <tr><td><strong>110</strong></td><td>POP3</td><td>Receiving Email (Downloads & Deletes)</td></tr>
              <tr><td><strong>143</strong></td><td>IMAP</td><td>Receiving Email (Syncs with Server)</td></tr>
              <tr><td><strong>3389</strong></td><td>RDP</td><td>Remote Desktop Protocol (Windows GUI)</td></tr>
            </table>
          </div>
        `,
        quiz: { question: "Which protocol and port are used to SEND email?", options: ["POP3 (110)", "IMAP (143)", "SMTP (25)", "HTTPS (443)"], correctAnswer: 2, explanation: "SMTP (Simple Mail Transfer Protocol) on port 25 is used to send email." }
      }
    ]
  },

  // ==========================================
  // MODULE 11: NETWORK APPLICATIONS
  // ==========================================
  {
    id: "mod-11",
    title: "Module 11: Network Applications",
    description: "Voice, Video, and Storage.",
    topics: [
      {
        id: "t-11-1",
        title: "11.1 VoIP (Voice over IP)",
        content: `
          <h3>Phone Calls over the Internet</h3>
          <p><strong>VoIP</strong> replaces traditional phone lines with data packets. It's cheaper and more flexible, but it's sensitive to network issues (Latency, Jitter).</p>
          
          <div class="concept-card">
            <h4>The Two Main Protocols</h4>
            <ul>
              <li><strong>SIP (Session Initiation Protocol):</strong> The "Signaling" protocol. It sets up the call, rings the phone, and hangs up. (TCP/UDP 5060/5061).</li>
              <li><strong>RTP (Real-time Transport Protocol):</strong> The "Media" protocol. It carries the actual voice/video data packets. (UDP).</li>
            </ul>
          </div>

          <p><strong>QoS (Quality of Service):</strong> Essential for VoIP. You must prioritize Voice traffic over YouTube or File Downloads to prevent choppy audio.</p>
        `,
        quiz: { question: "Which protocol is responsible for setting up, maintaining, and tearing down a VoIP call session?", options: ["RTP", "SIP", "UDP", "TCP"], correctAnswer: 1, explanation: "SIP (Session Initiation Protocol) handles the signaling (call setup), while RTP carries the actual media." }
      },
      {
        id: "t-11-2",
        title: "11.2 Virtualization Basics",
        content: `
          <h3>One Hardware, Many Servers</h3>
          <p><strong>Virtualization</strong> allows you to run multiple "Virtual Machines" (VMs) on a single physical server. This saves electricity, space, and money.</p>
          
          <div class="concept-card">
            <h4>The Hypervisor</h4>
            <p>The software that creates and manages VMs.</p>
            <ul>
              <li><strong>Type 1 (Bare Metal):</strong> Installs directly on the hardware (e.g., ESXi, Hyper-V). Faster and more efficient. Used in Data Centers.</li>
              <li><strong>Type 2 (Hosted):</strong> Installs as an app on your OS (e.g., VMware Workstation, VirtualBox). Slower. Used for testing on laptops.</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which type of Hypervisor runs directly on the server hardware without an underlying operating system?", options: ["Type 1 (Bare Metal)", "Type 2 (Hosted)", "Container", "Emulator"], correctAnswer: 0, explanation: "Type 1 Hypervisors (Bare Metal) run directly on the hardware for maximum performance." }
      },
      {
        id: "t-11-3",
        title: "11.3 Network Storage (NAS vs SAN)",
        content: `
          <h3>Where Data Lives</h3>
          <p>Servers need to store files. We have two main ways to do this over a network.</p>
          
          <div class="concept-card">
            <h4>NAS (Network Attached Storage)</h4>
            <p><strong>"File Level"</strong></p>
            <p>It's like a shared folder. You see files and folders.
            <br><em>Protocols:</em> SMB (Windows), NFS (Linux).
            <br><em>Best for:</em> File sharing, home backups.</p>
          </div>

          <div class="concept-card">
            <h4>SAN (Storage Area Network)</h4>
            <p><strong>"Block Level"</strong></p>
            <p>It looks like a local hard drive to the server. You format it with a filesystem.
            <br><em>Protocols:</em> iSCSI (over Ethernet), Fibre Channel (Special cables).
            <br><em>Best for:</em> High-performance databases, VM storage.</p>
          </div>
        `,
        quiz: { question: "Which storage technology presents storage to the server as 'Block Level' storage, appearing as a local hard drive?", options: ["NAS", "SAN", "FTP", "SMB"], correctAnswer: 1, explanation: "SAN (Storage Area Network) provides Block Level storage, whereas NAS provides File Level storage." }
      }
    ]
  },

  // ==========================================
  // MODULE 12: CLOUD COMPUTING
  // ==========================================
  {
    id: "mod-12",
    title: "Module 12: Cloud Computing",
    description: "XaaS and Deployment Models.",
    topics: [
      {
        id: "t-12-1",
        title: "12.1 Service Models (XaaS)",
        content: `
          <h3>Who Manages What?</h3>
          <p>Cloud computing is about renting resources instead of buying them. The main difference is how much YOU manage vs. how much the PROVIDER manages.</p>
          
          <div class="concept-card">
            <h4>The Big Three</h4>
            <ul>
              <li><strong>SaaS (Software as a Service):</strong> You manage NOTHING. You just use the software. (e.g., Gmail, Dropbox, Salesforce).</li>
              <li><strong>PaaS (Platform as a Service):</strong> You manage the CODE. Provider manages the OS and Hardware. (e.g., Google App Engine, Azure App Service). Great for developers.</li>
              <li><strong>IaaS (Infrastructure as a Service):</strong> You manage the OS and Apps. Provider manages the Hardware (Virtualization, Networking). (e.g., AWS EC2, Azure VMs).</li>
            </ul>
          </div>
        `,
        quiz: { question: "In which cloud service model does the customer manage the Operating System and Applications, while the provider manages the Hardware?", options: ["SaaS", "PaaS", "IaaS", "DaaS"], correctAnswer: 2, explanation: "IaaS (Infrastructure as a Service) gives you a virtual server. You are responsible for patching the OS and installing software." }
      },
      {
        id: "t-12-2",
        title: "12.2 IaC (Infrastructure as Code)",
        content: `
          <h3>Scripting the Network</h3>
          <p>Gone are the days of manually configuring routers one by one. <strong>IaC</strong> allows us to define our entire infrastructure in text files (code).</p>
          
          <div class="concept-card">
            <h4>Why IaC?</h4>
            <ul>
              <li><strong>Speed:</strong> Deploy 100 servers in minutes.</li>
              <li><strong>Consistency:</strong> Eliminates "Configuration Drift". Every server is identical.</li>
              <li><strong>Version Control:</strong> You can track changes in Git.</li>
            </ul>
            <p><em>Tools:</em> Terraform, Ansible, CloudFormation.</p>
          </div>
        `,
        quiz: { question: "What is a primary benefit of using Infrastructure as Code (IaC) over manual configuration?", options: ["It requires more hardware", "It eliminates configuration drift and ensures consistency", "It is slower but more secure", "It removes the need for firewalls"], correctAnswer: 1, explanation: "IaC ensures that every deployment is identical based on the code definition, preventing configuration drift." }
      }
    ]
  },

  // ==========================================
  // MODULE 13: WIRELESS STANDARDS
  // ==========================================
  {
    id: "mod-13",
    title: "Module 13: Wireless Standards",
    description: "802.11 a/b/g/n/ac/ax.",
    topics: [
      {
        id: "t-13-1",
        title: "13.1 Frequencies & Channels",
        diagram: "wifi-channels",
        content: `
          <h3>The Radio Station Analogy</h3>
          <p>Wi-Fi is just radio waves. If two stations talk on the same frequency, you hear static (Interference). We have two main frequency bands.</p>
          
          <div class="concept-card">
            <h4>2.4 GHz Band</h4>
            <p><strong>"The Crowded Highway"</strong></p>
            <ul>
              <li><strong>Pros:</strong> Long range, penetrates walls well.</li>
              <li><strong>Cons:</strong> Slow, very crowded (Microwaves, Bluetooth, Baby Monitors use it too).</li>
              <li><strong>Non-Overlapping Channels:</strong> 1, 6, and 11. (Memorize this!). If you use channel 2, you interfere with 1 AND 6.</li>
            </ul>
          </div>

          <div class="concept-card">
            <h4>5 GHz Band</h4>
            <p><strong>"The Fast Lane"</strong></p>
            <ul>
              <li><strong>Pros:</strong> Very fast, many more channels (23+), less interference.</li>
              <li><strong>Cons:</strong> Short range, struggles to go through walls.</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which 2.4 GHz channels are considered 'non-overlapping' in the US and should be used to avoid interference?", options: ["1, 2, 3", "1, 6, 11", "2, 4, 6", "1, 5, 9"], correctAnswer: 1, explanation: "Channels 1, 6, and 11 are the only ones in the 2.4 GHz band that do not overlap with each other." }
      },
      {
        id: "t-13-2",
        title: "13.2 Wi-Fi Standards (802.11)",
        content: `
          <h3>The Generations of Wi-Fi</h3>
          <p>The IEEE 802.11 standards define how Wi-Fi works. You need to know the speeds and frequencies.</p>
          
          <div class="concept-card">
            <h4>Memorize These Standards</h4>
            <table class="data-table">
              <tr><th>Standard</th><th>Name</th><th>Freq</th><th>Speed (Max)</th><th>Key Tech</th></tr>
              <tr><td><strong>802.11a</strong></td><td>-</td><td>5 GHz</td><td>54 Mbps</td><td>OFDM</td></tr>
              <tr><td><strong>802.11b</strong></td><td>-</td><td>2.4 GHz</td><td>11 Mbps</td><td>DSSS</td></tr>
              <tr><td><strong>802.11g</strong></td><td>-</td><td>2.4 GHz</td><td>54 Mbps</td><td>OFDM</td></tr>
              <tr><td><strong>802.11n</strong></td><td>Wi-Fi 4</td><td>Both</td><td>600 Mbps</td><td>MIMO (Multiple Antennas)</td></tr>
              <tr><td><strong>802.11ac</strong></td><td>Wi-Fi 5</td><td>5 GHz</td><td>6.9 Gbps</td><td>MU-MIMO (Multi-User)</td></tr>
              <tr><td><strong>802.11ax</strong></td><td>Wi-Fi 6</td><td>Both</td><td>9.6 Gbps</td><td>OFDMA (High Efficiency)</td></tr>
            </table>
          </div>
        `,
        quiz: { question: "Which wireless standard operates ONLY on the 5 GHz frequency band?", options: ["802.11n", "802.11ac", "802.11ax", "802.11g"], correctAnswer: 1, explanation: "802.11ac (Wi-Fi 5) is the only standard listed that operates exclusively on the 5 GHz band." }
      }
    ]
  },

  // ==========================================
  // MODULE 14: WIRELESS SECURITY
  // ==========================================
  {
    id: "mod-14",
    title: "Module 14: Wireless Security",
    description: "WPA, Auth, and Surveys.",
    topics: [
      {
        id: "t-14-1",
        title: "14.1 WPA Versions",
        content: `
          <h3>Locking the Airwaves</h3>
          <p>Wi-Fi signals go through walls, so anyone in the parking lot can listen in. We need encryption.</p>
          
          <div class="concept-card">
            <h4>Evolution of Security</h4>
            <ul>
              <li><strong>WEP (Wired Equivalent Privacy):</strong> The first attempt. <strong>BROKEN.</strong> Can be hacked in seconds. Never use it.</li>
              <li><strong>WPA (Wi-Fi Protected Access):</strong> A temporary fix for WEP. Uses TKIP. Deprecated.</li>
              <li><strong>WPA2 (The Standard):</strong> Uses <strong>AES</strong> (Advanced Encryption Standard) with CCMP. Very secure.</li>
              <li><strong>WPA3 (The New Standard):</strong> Replaces the 4-Way Handshake with <strong>SAE</strong> (Simultaneous Authentication of Equals). Impossible to brute-force offline.</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which wireless security standard introduced SAE (Simultaneous Authentication of Equals) to prevent offline dictionary attacks?", options: ["WPA2", "WEP", "WPA3", "WPA"], correctAnswer: 2, explanation: "WPA3 uses SAE to securely exchange keys, making it resistant to offline brute-force attacks." }
      },
      {
        id: "t-14-2",
        title: "14.2 Enterprise Auth (802.1X)",
        content: `
          <h3>Individual Logins</h3>
          <p>At home, everyone shares the same Wi-Fi password (WPA-Personal). In a large office, this is a nightmare. If one person leaves, you have to change the password for everyone.</p>
          
          <div class="concept-card">
            <h4>WPA-Enterprise</h4>
            <p>Users log in with their own username and password (like their Windows login).</p>
            <ul>
              <li><strong>Supplicant:</strong> The Client (Laptop/Phone).</li>
              <li><strong>Authenticator:</strong> The Wireless Access Point (WAP). It acts as a bouncer.</li>
              <li><strong>Authentication Server:</strong> A <strong>RADIUS</strong> server (AAA). It holds the list of users and passwords.</li>
            </ul>
            <p><em>Protocol:</em> <strong>802.1X</strong> (Port-based Network Access Control).</p>
          </div>
        `,
        quiz: { question: "Which component in an 802.1X setup holds the database of user credentials?", options: ["The Supplicant", "The Authenticator (WAP)", "The RADIUS Server", "The Firewall"], correctAnswer: 2, explanation: "The RADIUS server (Authentication Server) verifies the credentials provided by the user." }
      }
    ]
  },

  // ==========================================
  // MODULE 15: NETWORK AVAILABILITY
  // ==========================================
  {
    id: "mod-15",
    title: "Module 15: Availability & Redundancy",
    description: "Keeping the lights on.",
    topics: [
      {
        id: "t-15-1",
        title: "15.1 High Availability (HA)",
        content: `
          <h3>Keeping the Lights On</h3>
          <p><strong>High Availability</strong> means making sure the network is always up, even if something breaks. We achieve this through <strong>Redundancy</strong> (having backups).</p>
          
          <div class="concept-card">
            <h4>FHRP (First Hop Redundancy Protocol)</h4>
            <p>What happens if your Default Gateway (Router) dies? The internet goes down. FHRP fixes this.</p>
            <ul>
              <li><strong>Concept:</strong> Two physical routers share ONE "Virtual IP" address.</li>
              <li><strong>Operation:</strong> Your PC points to the Virtual IP. If Router A dies, Router B instantly takes over the Virtual IP. You never notice.</li>
              <li><strong>Protocols:</strong>
                <br>- <em>VRRP (Virtual Router Redundancy Protocol):</em> Open standard.
                <br>- <em>HSRP (Hot Standby Router Protocol):</em> Cisco proprietary.
              </li>
            </ul>
          </div>
        `,
        quiz: { question: "What is the primary purpose of First Hop Redundancy Protocols (FHRP) like VRRP and HSRP?", options: ["Load balancing internet traffic", "Providing a backup default gateway", "Encrypting router traffic", "Assigning IP addresses"], correctAnswer: 1, explanation: "FHRP allows multiple routers to share a single virtual IP, ensuring clients always have a working default gateway." }
      },
      {
        id: "t-15-2",
        title: "15.2 Link Aggregation (LACP)",
        content: `
          <h3>Stronger Together</h3>
          <p>What if one Ethernet cable isn't fast enough? Or what if it gets cut?</p>
          
          <div class="concept-card">
            <h4>LACP (802.3ad)</h4>
            <p>Also known as NIC Teaming, Port Channel, or EtherChannel.</p>
            <ul>
              <li><strong>Aggregation:</strong> Combine multiple physical cables (e.g., 4 x 1Gbps) into one logical link (4Gbps).</li>
              <li><strong>Redundancy:</strong> If one cable breaks, the link stays up (at 3Gbps).</li>
              <li><strong>Load Balancing:</strong> Traffic is spread across all cables.</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which standard defines the Link Aggregation Control Protocol (LACP)?", options: ["802.1Q", "802.3ad", "802.11ax", "802.1X"], correctAnswer: 1, explanation: "802.3ad is the IEEE standard for Link Aggregation Control Protocol (LACP)." }
      }
    ]
  },

  // ==========================================
  // MODULE 16: SECURITY CONCEPTS
  // ==========================================
  {
    id: "mod-16",
    title: "Module 16: Security Concepts",
    description: "CIA, AAA, and Zero Trust.",
    topics: [
      {
        id: "t-16-1",
        title: "16.1 CIA Triad",
        content: `
          <h3>The Holy Trinity of Security</h3>
          <p>Every security decision boils down to these three pillars. You must balance them.</p>
          
          <div class="concept-card">
            <h4>C-I-A</h4>
            <ul>
              <li><strong>Confidentiality:</strong> "Only authorized eyes."
                <br><em>Tools:</em> Encryption (AES), Access Control Lists (ACLs), Steganography.
              </li>
              <li><strong>Integrity:</strong> "No unauthorized changes."
                <br><em>Tools:</em> Hashing (SHA-256), Digital Signatures, File Integrity Monitoring.
              </li>
              <li><strong>Availability:</strong> "Always up and running."
                <br><em>Tools:</em> Redundancy (RAID, UPS, Generators), Load Balancing, Backups.
              </li>
            </ul>
          </div>
        `,
        quiz: { question: "Using a Hash function (like SHA-256) to verify that a file has not been altered ensures which part of the CIA triad?", options: ["Confidentiality", "Integrity", "Availability", "Authorization"], correctAnswer: 1, explanation: "Integrity ensures that data remains unchanged and authentic. Hashing detects any modification." }
      },
      {
        id: "t-16-2",
        title: "16.2 Zero Trust",
        content: `
          <h3>Never Trust, Always Verify</h3>
          <p>The old "Castle and Moat" model (Trust everyone inside, block everyone outside) is dead.</p>
          
          <div class="concept-card">
            <h4>The Zero Trust Philosophy</h4>
            <p><strong>Assume Breach:</strong> Assume the attacker is already on the network.</p>
            <ul>
              <li><strong>Verify Explicitly:</strong> Authenticate and Authorize every request, even if it comes from the CEO's laptop inside the office.</li>
              <li><strong>Least Privilege:</strong> Give users only the access they strictly need, and nothing more.</li>
              <li><strong>Micro-Segmentation:</strong> Divide the network into tiny zones so an attacker can't move laterally.</li>
            </ul>
          </div>
        `,
        quiz: { question: "What is the core philosophy of the Zero Trust security model?", options: ["Trust but verify", "Never trust, always verify", "Trust internal users", "Trust the firewall"], correctAnswer: 1, explanation: "Zero Trust assumes no traffic is safe, regardless of origin, and requires verification for every request." }
      }
    ]
  },

  // ==========================================
  // MODULE 17: THREATS & ATTACKS
  // ==========================================
  {
    id: "mod-17",
    title: "Module 17: Threats & Attacks",
    description: "Bad guys and what they do.",
    topics: [
      {
        id: "t-17-1",
        title: "17.1 DoS vs DDoS",
        content: `
          <h3>Flooding the System</h3>
          <p>The goal is to make a service unavailable to legitimate users. It's like jamming a revolving door so no one can enter.</p>
          
          <div class="concept-card">
            <h4>The Difference</h4>
            <ul>
              <li><strong>DoS (Denial of Service):</strong> ONE attacker vs. ONE target. Easy to block (just block that one IP).</li>
              <li><strong>DDoS (Distributed Denial of Service):</strong> ONE attacker controls a <strong>Botnet</strong> (thousands of infected "Zombie" computers) to attack ONE target.
                <br><em>Why it's dangerous:</em> You can't just block one IP. The traffic comes from everywhere (grandma's laptop, a smart fridge, a hacked server).
              </li>
            </ul>
          </div>
        `,
        quiz: { question: "What distinguishes a DDoS attack from a standard DoS attack?", options: ["The volume of traffic", "The use of a distributed Botnet", "The protocol used", "The target"], correctAnswer: 1, explanation: "A DDoS uses a distributed network of compromised devices (Botnet) to attack from many sources simultaneously." }
      },
      {
        id: "t-17-2",
        title: "17.2 Social Engineering",
        content: `
          <h3>Hacking the Human</h3>
          <p>Why spend weeks hacking a firewall when you can just ask the receptionist for the password? Humans are the weakest link.</p>
          
          <div class="concept-card">
            <h4>Common Techniques</h4>
            <ul>
              <li><strong>Phishing:</strong> Generic fake emails ("Reset your password").</li>
              <li><strong>Spear Phishing:</strong> Targeted emails ("Hi Bob, this is Alice from HR...").</li>
              <li><strong>Whaling:</strong> Targeting big fish (CEOs, CFOs).</li>
              <li><strong>Vishing:</strong> Voice Phishing (Phone calls). "This is Microsoft Support..."</li>
              <li><strong>Tailgating:</strong> Following someone through a secure door without a badge.</li>
            </ul>
          </div>
        `,
        quiz: { question: "An attacker sends a highly personalized email to the CFO of a company to steal financial data. What type of attack is this?", options: ["Phishing", "Spear Phishing", "Whaling", "Vishing"], correctAnswer: 2, explanation: "Whaling is a specific type of Phishing that targets high-profile executives (Big Fish)." }
      }
    ]
  },

  // ==========================================
  // MODULE 18: NETWORK HARDENING
  // ==========================================
  {
    id: "mod-18",
    title: "Module 18: Network Hardening",
    description: "Locking it down.",
    topics: [
      {
        id: "t-18-1",
        title: "18.1 Switch Hardening",
        content: `
          <h3>Securing Layer 2</h3>
          <p>Switches are the entry point to your network. If you leave them open, anyone can plug in.</p>
          
          <div class="concept-card">
            <h4>The "Big Three" Features</h4>
            <ul>
              <li><strong>Port Security:</strong> "The Bouncer." It limits which MAC addresses can use a port.
                <br><em>Example:</em> "Only MAC AA:BB:CC can use Port 1. If anyone else tries, shut down the port."
              </li>
              <li><strong>DHCP Snooping:</strong> "The Trust System." It prevents <strong>Rogue DHCP Servers</strong>.
                <br><em>How:</em> You tell the switch "Port 24 is trusted (Uplink to real DHCP server). All other ports are untrusted." If a DHCP Offer comes from Port 5, BLOCK IT.
              </li>
              <li><strong>DAI (Dynamic ARP Inspection):</strong> "The ID Checker." It prevents <strong>ARP Poisoning</strong>.
                <br><em>How:</em> It uses the DHCP Snooping database to verify that the IP-to-MAC mapping is correct before allowing ARP packets.
              </li>
            </ul>
          </div>
        `,
        quiz: { question: "Which switch feature prevents a user from plugging in a rogue router and handing out bad IP addresses to the network?", options: ["Port Security", "DHCP Snooping", "BPDU Guard", "VLANs"], correctAnswer: 1, explanation: "DHCP Snooping tells the switch to block DHCP Offer packets from untrusted user ports, stopping rogue DHCP servers." }
      },
      {
        id: "t-18-2",
        title: "18.2 Firewalls",
        content: `
          <h3>The Wall</h3>
          <p>A firewall controls what traffic is allowed in or out of your network.</p>
          
          <div class="concept-card">
            <h4>Types of Firewalls</h4>
            <ul>
              <li><strong>Packet Filtering (Stateless):</strong> The old way. "Allow IP 1.2.3.4". Dumb and fast.</li>
              <li><strong>Stateful Inspection:</strong> The standard way. "If I send a request OUT to Google, automatically allow the reply IN." It tracks the "State" of connections.</li>
              <li><strong>NGFW (Next-Generation Firewall):</strong> The modern way. It can see <strong>Layer 7</strong> (Applications).
                <br><em>Example:</em> "Allow Facebook Chat, but Block Facebook Games." "Block malware inside the packet."
              </li>
            </ul>
          </div>
        `,
        quiz: { question: "Which type of firewall can inspect actual application data (Layer 7) to block specific features like 'Facebook Games' while allowing 'Facebook Chat'?", options: ["Packet Filter", "Stateful", "NGFW", "Circuit Gateway"], correctAnswer: 2, explanation: "Next-Gen Firewalls (NGFW) perform Deep Packet Inspection (DPI) to identify and control applications at Layer 7." }
      }
    ]
  },

  // ==========================================
  // MODULE 19: MONITORING
  // ==========================================
  {
    id: "mod-19",
    title: "Module 19: Network Monitoring",
    description: "Watching the network.",
    topics: [
      {
        id: "t-19-1",
        title: "19.1 SNMP (Simple Network Management Protocol)",
        content: `
          <h3>Remote Monitoring</h3>
          <p>How do you know if a router in Tokyo is overheating? You use SNMP. It's the standard for gathering stats from network devices.</p>
          
          <div class="concept-card">
            <h4>The Components</h4>
            <ul>
              <li><strong>Agent:</strong> Small software running on the device (Router/Switch). It gathers data.</li>
              <li><strong>Manager:</strong> The central server (NMS) that asks for data.</li>
              <li><strong>MIB (Management Information Base):</strong> The database structure. A list of questions the Manager can ask (e.g., "What is your CPU usage?").</li>
              <li><strong>Trap:</strong> An alert sent by the Agent <em>without</em> being asked (e.g., "Help! My fan failed!").</li>
            </ul>
            <p><strong>Versions:</strong> v1 and v2c send data in <strong>Cleartext</strong> (Insecure). Always use <strong>SNMPv3</strong> (Encrypted + Authentication).</p>
          </div>
        `,
        quiz: { question: "Which SNMP version introduces encryption and authentication to secure network management traffic?", options: ["SNMPv1", "SNMPv2c", "SNMPv3", "SNMPv4"], correctAnswer: 2, explanation: "SNMPv3 is the only version that supports encryption and strong authentication, making it secure for use over public networks." }
      },
      {
        id: "t-19-2",
        title: "19.2 SIEM (Security Information & Event Management)",
        content: `
          <h3>The Central Brain</h3>
          <p>Your firewall logs attacks. Your server logs failed logins. Your switch logs port errors. Who connects the dots?</p>
          
          <div class="concept-card">
            <h4>Log Aggregation & Correlation</h4>
            <p>A SIEM (like Splunk, Datadog) collects logs from <strong>everywhere</strong>.</p>
            <ul>
              <li><strong>Aggregation:</strong> Putting all logs in one searchable place.</li>
              <li><strong>Correlation:</strong> Finding patterns.
                <br><em>Example:</em> "5 failed logins on the VPN" + "1 successful login on the File Server" = <strong>Compromised Account!</strong>
              </li>
              <li><strong>Alerting:</strong> Sending an email/SMS to the admin when a threat is detected.</li>
            </ul>
          </div>
        `,
        quiz: { question: "What is the primary function of a SIEM system that distinguishes it from a simple log server?", options: ["Storing logs", "Event Correlation", "Routing packets", "Blocking viruses"], correctAnswer: 1, explanation: "While log servers store data, a SIEM correlates events from multiple sources to identify complex threats and patterns." }
      }
    ]
  },

  // ==========================================
  // MODULE 20: TROUBLESHOOTING
  // ==========================================
  {
    id: "mod-20",
    title: "Module 20: Troubleshooting",
    description: "Methodology, Tools, and Common Issues.",
    topics: [
      {
        id: "t-20-1",
        title: "20.1 The 7 Steps",
        content: `
          <h3>CompTIA's Troubleshooting Methodology</h3>
          <p>You must memorize this order for the exam. It's the logical way to solve any problem.</p>
          
          <div class="concept-card">
            <h4>The 7 Steps</h4>
            <ol>
              <li><strong>Identify the Problem:</strong> Gather info. Ask the user "What changed?". Duplicate the issue.</li>
              <li><strong>Establish a Theory:</strong> "I think the cable is broken." Start with the simplest explanation (OSI Layer 1).</li>
              <li><strong>Test the Theory:</strong> Swap the cable. Did it work? If not, make a new theory.</li>
              <li><strong>Plan of Action:</strong> "I need to buy a new cable and schedule downtime to replace it."</li>
              <li><strong>Implement the Solution:</strong> Do the work.</li>
              <li><strong>Verify Functionality:</strong> Does it work now? Did you break anything else?</li>
              <li><strong>Document Findings:</strong> Write it down so the next person knows what happened.</li>
            </ol>
          </div>
        `,
        quiz: { question: "After implementing a fix, what is the IMMEDIATE next step in the troubleshooting methodology?", options: ["Document findings", "Verify functionality", "Establish a theory", "Close the ticket"], correctAnswer: 1, explanation: "You must verify that the system works as expected and that the fix didn't introduce new problems before documenting." }
      },
      {
        id: "t-20-2",
        title: "20.2 Command Line Tools",
        content: `
          <h3>The CLI Toolkit</h3>
          <p>Real network engineers live in the terminal. These are your weapons.</p>
          
          <div class="concept-card">
            <h4>Essential Commands</h4>
            <ul>
              <li><strong>ping:</strong> "Hello, are you there?" Tests basic connectivity (ICMP).</li>
              <li><strong>tracert / traceroute:</strong> "How do I get to you?" Shows every router (hop) along the path. Great for finding WHERE the connection breaks.</li>
              <li><strong>nslookup / dig:</strong> "What's your IP?" Tests DNS resolution.</li>
              <li><strong>netstat:</strong> "Who am I talking to?" Shows active connections and open ports on YOUR machine.</li>
              <li><strong>ipconfig / ifconfig:</strong> "Who am I?" Shows your own IP address and MAC address.</li>
              <li><strong>arp -a:</strong> Shows the cache of IP-to-MAC address mappings.</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which command would you use to see a list of all active connections and listening ports on your local computer?", options: ["ping", "tracert", "netstat", "ipconfig"], correctAnswer: 2, explanation: "Netstat (Network Statistics) displays active TCP/IP connections and listening ports." }
      },
      {
        id: "t-20-3",
        title: "20.3 Hardware Tools",
        content: `
          <h3>The Physical Toolkit</h3>
          <p>Sometimes the problem is a physical wire. You need physical tools to find it.</p>
          
          <div class="concept-card">
            <h4>Cable Tools</h4>
            <ul>
              <li><strong>Cable Tester:</strong> Checks for continuity. "Is the wire broken? Are the pins matched correctly?"</li>
              <li><strong>Toner Probe (Fox & Hound):</strong> Finds a specific cable in a messy bundle. The "Fox" sends a tone, the "Hound" plays it when you touch the right wire.</li>
              <li><strong>TDR / OTDR:</strong> Time Domain Reflectometer. Finds <em>exactly</em> where a break is (e.g., "Break at 50 meters"). OTDR is for Fiber.</li>
              <li><strong>Loopback Plug:</strong> Plugs into a NIC to test if the card itself is working.</li>
            </ul>
          </div>
        `,
        quiz: { question: "Which tool would you use to locate a specific cable in a disorganized server room bundle?", options: ["Cable Tester", "Toner Probe", "Multimeter", "Punchdown Tool"], correctAnswer: 1, explanation: "A Toner Probe (Fox and Hound) allows you to trace a tone through a cable to identify it in a bundle." }
      },
      {
        id: "t-20-4",
        title: "20.4 Common Issues",
        content: `
          <h3>What Goes Wrong?</h3>
          <p>Recognizing symptoms is half the battle.</p>
          
          <div class="concept-card">
            <h4>Common Symptoms</h4>
            <ul>
              <li><strong>Speed/Duplex Mismatch:</strong> One side is Full Duplex, other is Half. Result: Slow speed, Late Collisions.</li>
              <li><strong>Crosstalk (NEXT/FEXT):</strong> Signal bleeds from one wire to another. Caused by bad crimping or interference.</li>
              <li><strong>Attenuation:</strong> Signal gets weaker over distance. (e.g., Running Cat6 longer than 100m).</li>
              <li><strong>Short / Open:</strong> Wires touching each other (Short) or wire cut (Open).</li>
            </ul>
          </div>
        `,
        quiz: { question: "What is the most likely cause of 'Late Collisions' on an Ethernet interface?", options: ["Duplex Mismatch", "Bad DNS", "DHCP Failure", "Wrong IP"], correctAnswer: 0, explanation: "A Duplex Mismatch (one side Full, one side Half) is the classic cause of Late Collisions and poor performance." }
      }
    ]
  }
];
