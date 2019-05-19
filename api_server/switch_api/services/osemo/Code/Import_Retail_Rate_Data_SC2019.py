def Import_Retail_Rate_Data(Input_Output_Data_Directory_Location, OSESMO_Git_Repo_Directory,delta_t, Retail_Rate_Name_Input):
 
    # Load Python Packages
    import os
    import numpy as np

    # Set Directory to Box Sync Folder
    os.chdir(Input_Output_Data_Directory_Location)
 
 
    # Import Volumetric (per kWh) Rate Data

    if Retail_Rate_Name_Input == "PG&E E-TOU-B":

        Retail_Rate_Master_Index = "R1"
        Retail_Rate_Effective_Date = "2019-03-01"

        if delta_t == (60 / 60):
            Volumetric_Rate_Data = np.genfromtxt(
                'Rates/PG&E E-TOU-B/2017/60-Minute Data/Vector Format/2017_PGE_ETOUB_Energy_Rates_Vector.csv',
                delimiter=',')


 
# Select Demand Charge and Fixed-Charge Variable Values
 
    if Retail_Rate_Name_Input == "PG&E E-TOU-B":

        # Demand Charges - PG&E E-TOU-B
        Summer_Peak_DC = 0
        Summer_Part_Peak_DC = 0
        Summer_Noncoincident_DC = 0
        Winter_Peak_DC = 0
        Winter_Part_Peak_DC = 0 # There is no part-peak demand charge in the winter.
        Winter_Noncoincident_DC = 0

        # Fixed Per-Meter-Day Charge - PG&E E-TOU-B
        Fixed_Per_Meter_Day_Charge = 0 # $ per meter per day
        Fixed_Per_Meter_Month_Charge = 0 # $ per meter per month

        # Summer Months
        First_Summer_Month = 6 # June is the first summer month for this rate.
        Last_Summer_Month = 9 # September is the last summer month for this rate.
        

 
 
# Import Month Data - Used to Filter Other Vectors
 
    if Retail_Rate_Name_Input == "PG&E E-TOU-B":
        
        if delta_t == (60/60):
            Month_Data = np.genfromtxt(
                'Rates/PG&E E-TOU-B/2017/60-Minute Data/Vector Format/2017_PGE_ETOUB_Month_Vector.csv', delimiter=',')


    # Import Peak and Part-Peak Binary Variable Data
 
    if Retail_Rate_Name_Input == "PG&E E-TOU-B":
        
        # PG&E PG&E E-TOU-B does not have any coincident peak or part-peak demand charges.
        
        Summer_Peak_Binary_Data = np.zeros(np.shape(Month_Data))
        Summer_Part_Peak_Binary_Data = np.zeros(np.shape(Month_Data))
        Winter_Peak_Binary_Data = np.zeros(np.shape(Month_Data))
        Winter_Part_Peak_Binary_Data = np.zeros(np.shape(Month_Data))


    # Return to OSESMO Git Repository Directory
    os.chdir(OSESMO_Git_Repo_Directory)


    return Retail_Rate_Master_Index, Retail_Rate_Effective_Date, Volumetric_Rate_Data, Summer_Peak_DC, Summer_Part_Peak_DC, Summer_Noncoincident_DC, \
           Winter_Peak_DC, Winter_Part_Peak_DC, Winter_Noncoincident_DC, Fixed_Per_Meter_Day_Charge, Fixed_Per_Meter_Month_Charge, \
           First_Summer_Month, Last_Summer_Month, Month_Data, \
           Summer_Peak_Binary_Data, Summer_Part_Peak_Binary_Data, Winter_Peak_Binary_Data, Winter_Part_Peak_Binary_Data