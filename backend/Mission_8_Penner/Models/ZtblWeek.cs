﻿using System;
using System.Collections.Generic;

namespace Mission_8_Penner.Models;

public partial class ZtblWeek
{
    public DateOnly WeekStart { get; set; }

    public DateOnly? WeekEnd { get; set; }
}
