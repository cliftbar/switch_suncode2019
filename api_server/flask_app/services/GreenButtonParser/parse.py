#!/usr/bin/python

import sys
import xml.etree.ElementTree as ET

from api_server.flask_app.services.GreenButtonParser.resources import *

def parse_feed(filename):
    tree = ET.parse(filename)

    usagePoints = []
    for entry in tree.getroot().findall('atom:entry/atom:content/espi:UsagePoint/../..', ns):
        up = UsagePoint(entry)
        usagePoints.append(up)
    
    meterReadings = []    
    for entry in tree.getroot().findall('atom:entry/atom:content/espi:MeterReading/../..', ns):
        mr = MeterReading(entry, usagePoints=usagePoints)
        meterReadings.append(mr)

    readingTypes = []
    for entry in tree.getroot().findall('atom:entry/atom:content/espi:ReadingType/../..', ns):
        rt = ReadingType(entry, meterReadings=meterReadings)
        readingTypes.append(rt)

    intervalBlocks = []
    for entry in tree.getroot().findall('atom:entry/atom:content/espi:IntervalBlock/../..', ns):
        ib = IntervalBlock(entry, meterReadings=meterReadings)
        intervalBlocks.append(ib)
    
    # return usagePoints
    # changed below to just return this in order to just give me the meter readings directly
    return meterReadings[0]

if __name__ == "__main__":
    parse_feed("/home/harrison/switch_suncode2019/api_server/flask_app/services/GreenButtonParser/test_gb_data_resdiential.xml")