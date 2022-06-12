#! node

/**
 * Script used to generate the data used by the website to look up information about each character.
 */

const fs = require("fs");
const data = [
  {
    code: 0,
    value: "NUL",
    group: "Control character",
    comment: {
      text: "The null character was historically used similarly to a NOP instruction. When sent to a printer it would give the mechanism time, such as to return to the beginning of the next line. In modern computing it is also often used as a sentinel value, such as to mark the end of a string in certain APIs.",
      source: "https://en.wikipedia.org/wiki/Null_character"
    }
  },
  {
    code: 1,
    value: "SOH (Start of Heading)",
    group: "Control character",
    comment: {
      text: "The \"Start of Heading\" character (SOH), as the name might suggest, is used to signify the start of a message header. It was used in combination with protocols such as IPTC 7901. Related characters are STX, ETX and EOT.",
      source: "https://en.wikipedia.org/wiki/Start_of_Heading"
    }
  },
  {
    code: 2,
    value: "STX (Start of Text)",
    group: "Control character",
    comment: {
      text: "The \"Start of Text\" character (STX) signifies the start of a message's main text body. If SOH (\"Start of Heading\") was transmitted previously then STX also signifies the end of the message header. Other related characters are ETX and EOT.",
      source: "https://en.wikipedia.org/wiki/Start_of_Text"
    }
  },
  {
    code: 3,
    value: "ETX (End of Text)",
    group: "Control character",
    comment: {
      text: "The \"End of Text\" character (ETX) signifies the end of a message's main text body, that was previously started by STX (\"Start of Text\"). Other related characters are SOH and EOT.",
      source: "https://en.wikipedia.org/wiki/End-of-Text_character"
    }
  },
  {
    code: 4,
    value: "EOT (End of Transmission)",
    group: "Control character",
    comment: {
      text: "The \"End of Transmission\" character (EOT) marks the end of a transmission. Other uses include disconnecting terminals, or placing receivers into standby mode. In Unix terminal drivers it also signifies the end of a file, where it is also commonly referred to as \"Control-D\" or simply \"^D\". Related characters are SOH, STX and ETX.",
      source: "https://en.wikipedia.org/wiki/End-of-Transmission_character"
    }
  },
  {
    code: 5,
    value: "ENQ (Enquiry)",
    group: "Control character",
    comment: {
      text: "Using the \"Enquiry\" character (ENQ) a machine can ask its peer -- with which a connection has been previously set up -- whether it is still available and for it to transmit its identifier.",
      source: "https://en.wikipedia.org/wiki/Enquiry_character"
    }
  },
  {
    code: 6,
    value: "ACK (Acknowledgement)",
    group: "Control character",
    comment: {
      text: "The \"Acknowledgement\" character (ACK) allows a machine to tell its peer that it successfully received a request. Requests can consist of a simple data transmission, asking for connection, etc.. Related characters are NAK.",
      source: "https://en.wikipedia.org/wiki/Acknowledge_character"
    }
  },
  {
    code: 7,
    value: "BEL (Bell)",
    group: "Control character",
    comment: {
      text: "The \"Bell\" character (BEL) instructs a connected device (such as teletypewriter in historical contexts) to literally ring a physical bell. This would allow the hardware to notify operators of an event. Later hardware also provided support for the BEL character by playing some sort of sound effect on receival. Modern software such as terminal emulators integrate with the operating system to use the BEL character for notifications too.",
      source: "https://en.wikipedia.org/wiki/Bell_character"
    }
  },
  {
    code: 8,
    value: "BS (Backspace)",
    group: "Control character",
    comment: {
      text: "The \"Backspace\" character (BS) instructs a cursor, typewriter head, printer head or similar device to move back one position. It is typically issued by the backspace key on a keyboard. See also DEL.",
      source: "https://en.wikipedia.org/wiki/Backspace"
    }
  },
  {
    code: 9,
    value: "HT (Horizontal Tab)",
    group: "Control character",
    comment: {
      text: "The \"Horizontal Tab\" character (HT) is used advance a cursor or printer head to the next of a set of predefined tab stops. This allows for easy formatting of documents based on a predefined layout based on such tab stops. Tab stops of a fixed size are also commonly used to format text, such as a software's source code.",
      source: "https://en.wikipedia.org/wiki/Horizontal_Tab"
    }
  },
  {
    code: 10,
    value: "LF (Line Feed)",
    group: "Control character",
    comment: {
      text: "The \"Line Feed\" character (LF) marks the end of a line of a text. See also CR.",
      source: "https://en.wikipedia.org/wiki/Line_Feed"
    }
  },
  {
    code: 11,
    value: "VT (Vertical Tab)",
    group: "Control character",
    comment: {
      text: "Similar to the \"Horizontal Tab\" character, the \"Vertical Tab\" character (VT) allows moving a cursor or printer head to the next of a set of predefined tab stops, but in the vertical direction. This allows for easy formatting of documents based on a predefined layout based on such tab stops.",
      source: "https://en.wikipedia.org/wiki/Vertical_Tab"
    }
  },
  {
    code: 12,
    value: "FF (Form Feed)",
    group: "Control character",
    comment: {
      text: "The \"Form Feed\" character (FF) instructs the receiving printer to eject its current page and continue printing on a new page. Typically this also causes a carriage return in the printer, to start at the very beginning of the new page. It is also commonly referred to as a \"page break\".",
      source: "https://en.wikipedia.org/wiki/Form_Feed"
    }
  },
  {
    code: 13,
    value: "CR (Carriage Return)",
    group: "Control character",
    comment: {
      text: "The \"Carriage Return\" character (CR) represents an instruction to return to the beginning of the current line. On Windows operating systems, typically preceded by the line feed character to signify the end of a line in a (raw) text document. On other operating systems, such as those based on Unix, this preceding line feed character is typically not required. See also FF.",
      source: "https://en.wikipedia.org/wiki/Carriage_Return"
    }
  },
  {
    code: 14,
    value: "SO (Shift Out)",
    group: "Control character",
    comment: {
      text: "The \"Shift Out\" character (SO) and the \"Shift In\" character (SI) were originally used to control a red/black ribbon on teletypewriters. Later they were also used to switch between different fonts or character sets, such as between Russian and Latin characters (KOI7-switched) or Katakana and Roman characters (JIS X 0201).",
      source: "https://en.wikipedia.org/wiki/Shift_Out_and_Shift_In_characters"
    }
  },
  {
    code: 15,
    value: "SI (Shift In)",
    group: "Control character",
    comment: {
      text: "The \"Shift Out\" character (SO) and the \"Shift In\" character (SI) were originally used to control a red/black ribbon on teletypewriters. Later they were also used to switch between different fonts or character sets, such as between Russian and Latin characters (KOI7-switched) or Katakana and Roman characters (JIS X 0201).",
      source: "https://en.wikipedia.org/wiki/Shift_Out_and_Shift_In_characters"
    }
  },
  {
    code: 16,
    value: "DLE (Data Link Escape)",
    group: "Control character",
    comment: {
      text: "The \"Data Linke Escape\" character (DLE) instructs the receiving peer to interpret the following few characters differently. Exact interpretations are implementation dependent.",
      source: "https://en.wikipedia.org/wiki/Data_Link_Escape"
    }
  },
  {
    code: 17,
    value: "DC1 (Device Control 1)",
    group: "Control character",
    comment: {
      text: "The \"Device Control\" characters (DC1-DC4) were reserved for implementation defined device control, primarily for turning a device on or off. A major usecase for these characters was controlling the paper-tape-readers in ASCII Telex networks, which became the de facto standard for software flow control.",
      source: "https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Device_control="
    }
  },
  {
    code: 18,
    value: "DC2 (Device Control 2)",
    group: "Control character",
    comment: {
      text: "The \"Device Control\" characters (DC1-DC4) were reserved for implementation defined device control, primarily for turning a device on or off. A major usecase for these characters was controlling the paper-tape-readers in ASCII Telex networks, which became the de facto standard for software flow control.",
      source: "https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Device_control="
    }
  },
  {
    code: 19,
    value: "DC3 (Device Control 3)",
    group: "Control character",
    comment: {
      text: "The \"Device Control\" characters (DC1-DC4) were reserved for implementation defined device control, primarily for turning a device on or off. A major usecase for these characters was controlling the paper-tape-readers in ASCII Telex networks, which became the de facto standard for software flow control.",
      source: "https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Device_control="
    }
  },
  {
    code: 20,
    value: "DC4 (Device Control 4)",
    group: "Control character",
    comment: {
      text: "The \"Device Control\" characters (DC1-DC4) were reserved for implementation defined device control, primarily for turning a device on or off. A major usecase for these characters was controlling the paper-tape-readers in ASCII Telex networks, which became the de facto standard for software flow control.",
      source: "https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Device_control="
    }
  },
  {
    code: 21,
    value: "NAK (Negative Acknowledgement)",
    group: "Control character",
    comment: {
      text: "The \"Negative Acknowledgement\" character (NAK) is the opposite of the ACK character and allows a machine to tell its peer that it failed to receive or process a request. Requests can consist of a simple data transmission, asking for connection, etc.",
      source: "https://en.wikipedia.org/wiki/Negative-acknowledge_character"
    }
  },
  {
    code: 22,
    value: "SYN (Synchronous Idle)",
    group: "Control character",
    comment: {
      text: "The \"Synchronous Idle\" character (SYN) is typically used in synchronous serial communication as a method of synchronisation between peers, instead of start, stop or parity bits.",
      source: "https://en.wikipedia.org/wiki/Synchronous_Idle"
    }
  },
  {
    code: 23,
    value: "ETB (End of Transmission Block)",
    group: "Control character",
    comment: {
      text: "The \"End of Transmission Block\" character (ETB) is used to mark the end of a block in a communication. With it long streams of data can be split into logical blocks. Related characters are SOH, STX, ETX and EOT.",
      source: "https://en.wikipedia.org/wiki/End-of-Transmission-Block_character"
    }
  },
  {
    code: 24,
    value: "CAN (Cancel)",
    group: "Control character",
    comment: {
      text: "The \"Cancel\" character (CAN) is used to mark data as invalid and to be disregarded. The exact behaviour depends on the protocol in use. For example it may be used to mark the preceding word of text as to be deleted. It can also be used to clear video data in some Videotex formats.",
      source: "https://en.wikipedia.org/wiki/Cancel_character"
    }
  },
  {
    code: 25,
    value: "EM (End of Medium)",
    group: "Control character",
    comment: {
      text: "The \"End of Medium\" character (EM) is used to report the end of a storage medium, such as paper or magnetic tape. It can also be used to report the end of the used portion of a medium rather than its physical end.",
      source: "https://en.wikipedia.org/wiki/End_of_Medium"
    }
  },
  {
    code: 26,
    value: "SUB (Substitute)",
    group: "Control character",
    comment: {
      text: "The \"Substitute\" character (SUB) is intended to be used as padding to ensure all blocks of data have the same size. It is also used in place of erraneous, invalid or unrepresentable characters. Other uses include suspending processes in Unix-like shells, undoing actions in GUI applications (Ctrl+Z) or marking the end of a file in some older operating systems.",
      source: "https://en.wikipedia.org/wiki/Substitute_character"
    }
  },
  {
    code: 27,
    value: "ESC (Escape)",
    group: "Control character",
    comment: {
      text: "The \"Escape\" character (ESC) is used to start an escape or control sequence consisting of a certain number of following characters. This sequence will be interpreted differently depending on the context. A very common use case for the escape character are the ANSI escape codes used to control terminals such as to moving the cursor, changing background and foreground colors, etc.",
      source: "https://en.wikipedia.org/wiki/Escape_character#ASCII_escape_character"
    }
  },
  {
    code: 28,
    value: "FS (File Separator)",
    group: "Control character",
    comment: {
      text: "The separator characters (FS, GS, RS and US) are used in data structures as delimiters. Exact usecase depends on the protocal and implementation.",
      source: "https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Field_separators="
    }
  },
  {
    code: 29,
    value: "GS (Group Separator)",
    group: "Control character",
    comment: {
      text: "The separator characters (FS, GS, RS and US) are used in data structures as delimiters. Exact usecase depends on the protocal and implementation.",
      source: "https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Field_separators="
    }
  },
  {
    code: 30,
    value: "RS (Record Separator)",
    group: "Control character",
    comment: {
      text: "The separator characters (FS, GS, RS and US) are used in data structures as delimiters. Exact usecase depends on the protocal and implementation.",
      source: "https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Field_separators="
    }
  },
  {
    code: 31,
    value: "US (Unit Separator)",
    group: "Control character",
    comment: {
      text: "The separator characters (FS, GS, RS and US) are used in data structures as delimiters. Exact usecase depends on the protocal and implementation.",
      source: "https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Field_separators="
    }
  }
];

for (let i = 32; i < 127; i++) {
  const c = i == 32 ? "space" : String.fromCodePoint(i);
  data.push({
    code: i,
    value: c,
    group: "Printable character",
    comment: {
      text: `The \"${c}\" character is a simple printable character. Printable characters include lowercase and uppercase letters, digits, punctuation and other symbols.`
    }
  });
}

data.push({
  code: 127,
  value: "DEL (Delete)",
  group: "Control character",
  comment: {
    text: "The \"Delete\" character (DEL) itself does nothing, but represents a deleted a character. When a punch card was erroneously you could afterwards issue the backspace character to move the head back over this punch chard and then issue the delete character to mark this punch card as invalid.",
    source: "https://en.wikipedia.org/wiki/Delete_character"
  }
});

fs.writeFileSync("./docs/data.json", JSON.stringify(data));
